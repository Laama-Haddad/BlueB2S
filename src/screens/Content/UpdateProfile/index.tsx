import React, {useEffect, useState} from 'react';
import MainLayout from '../../MainLayout';
import {tr} from '../../../resources/translations';
import GenericTextInput from '../../../components/GenericTextInput';
import {useTheme} from '@react-navigation/native';
import Button from '../../../components/Button';
import {UpdateProfileProps} from '../../../resources/interfaces/screens/updateProfile';
import GenericText from '../../../components/GenericText';
import styles from './styles';
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  View,
} from 'react-native';
import {RootState} from '../../../redux/store';
import {connect} from 'react-redux';
import Icon from '../../../components/Icon';
import {SaveUser} from '../../../utils/userFuncs';
import {PersonalInformation} from '../../../resources/interfaces/items/userItem';
import {showToastAndroid} from '../../../utils/funcs';
import {getByScreenSize, wdp} from '../../../utils/responsive';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import config from '../../../config';

const mandatoryFields = ['firstName', 'lastName', 'mobile', 'email'];
const UpdateProfile = ({navigation, user}: UpdateProfileProps) => {
  const {personalInfo} = user;
  const [form, updateForm] = useState({
    firstName: personalInfo && personalInfo?.firstName,
    lastName: personalInfo && personalInfo?.lastName,
    mobile: personalInfo && personalInfo?.mobile,
    email: personalInfo && personalInfo?.email,
  });
  const [formComplete, setFormComplete] = useState(true);
  const [noChange, setNoChange] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const [photoUri, setPhotoUri] = useState(personalInfo.profileImage);
  const theme = useTheme();
  const handleChange = (key, value) => {
    updateForm({
      ...form,
      [key]: value,
    });
  };
  useEffect(() => {
    let _formComplete = true;
    for (let index = 0; index < mandatoryFields.length; index++) {
      const field = mandatoryFields[index];
      if (!form[field] || form[field].length <= 0) {
        setFormComplete(false);
        break;
      }
    }
    if (_formComplete) {
      setFormComplete(true);
    }
  }, [form]);

  const submit = async () => {
    let temp: PersonalInformation = {
      ...personalInfo,
      ...form,
      profileImage: photoUri,
    };
    setLoading(true);
    await SaveUser({personalInfo: temp});
    setLoading(false);
    showToastAndroid(tr('updateProfile.updateDoneAlertMessage'));
  };

  async function takePhotoFromCamera() {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    })
      .then(image => {
        if (image.path != '') {
          setPhotoUri(image.path);
          setNoChange(false);
        }
      })
      .finally(closeModal)
      .catch(err => {
        if (config.debug) {
          console.log(' Error fetching image from Camera roll ', err);
        }
      });
  }

  async function choosePhotosFromGallery() {
    ImagePicker.openPicker({
      width: 80,
      height: 80,
      multiple: false,
      cropping: true,
      mediaType: 'photo',
    })
      .then(image => {
        if (image.path != '') {
          setPhotoUri(image.path);
          setNoChange(false);
        }
      })
      .finally(closeModal)
      .catch(err => {
        if (config.debug) {
          console.log(' Error fetching images from gallery ', err);
        }
      });
  }

  return (
    <MainLayout
      backHeader
      title={tr('updateProfile.headerTitle')}
      onBackIconPress={() => navigation?.goBack()}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={
              photoUri != ''
                ? {uri: photoUri}
                : {
                    uri: 'https://i.postimg.cc/tT700h6t/download.png',
                  }
            }
            resizeMode={'contain'}
            style={[styles.image, {borderColor: theme.homeBackground}]}
          />
          <Icon
            type={'FontAwesome'}
            name={'camera'}
            size={theme.text.s9}
            color={theme.updateProfile.cameraIcon}
            role={'button'}
            onPress={openModal}
            background={theme.updateProfile.cameraBackground}
            border={theme.updateProfile.cameraBorder}
            style={[
              styles.cameraIcon,
              {
                width: wdp(getByScreenSize(8, 6)),
                height: wdp(getByScreenSize(8, 6)),
                borderRadius: wdp(getByScreenSize(4, 3)),
              },
            ]}
          />
        </View>
        <GenericText
          style={[
            styles.title,
            {fontSize: theme.text.s7, color: theme.updateProfile.title},
          ]}>
          {tr('updateProfile.account')}
        </GenericText>
        <GenericTextInput
          required
          label={tr('updateProfile.firstNameLabel')}
          value={form.firstName}
          onChangeText={text => {
            handleChange('firstName', text);
            setNoChange(false);
          }}
          containerStyle={{marginBottom: '3%'}}
        />
        <GenericTextInput
          required
          label={tr('updateProfile.lastNameLabel')}
          value={form.lastName}
          onChangeText={text => {
            handleChange('lastName', text);
            setNoChange(false);
          }}
          containerStyle={{marginBottom: '3%'}}
        />
        <GenericTextInput
          required
          label={tr('updateProfile.mobileLabel')}
          value={form.mobile}
          onChangeText={text => {
            handleChange('mobile', text);
            setNoChange(false);
          }}
          containerStyle={{marginBottom: '3%'}}
        />
        <GenericTextInput
          required
          label={tr('updateProfile.emailLabel')}
          value={form.email}
          onChangeText={text => {
            handleChange('email', text);
            setNoChange(false);
          }}
          containerStyle={{marginBottom: '3%'}}
        />
        <ActivityIndicator
          size={Platform.OS === 'ios' ? 'large' : 35}
          animating={loading}
          style={{marginVertical: '3%'}}
          color={theme.updateProfile.loading}
        />
        <View style={styles.bottomContainer}>
          <Button
            title={tr('updateProfile.submit')}
            backgroundColor={theme.updateProfile.submitBackground}
            disabled={!formComplete || noChange}
            onPress={() => formComplete && submit()}
          />
          <Button
            title={tr('updateProfile.changePassword')}
            backgroundColor={theme.updateProfile.submitBackground}
            onPress={() => console.log('change password')}
          />
        </View>
        <Modal
          isVisible={showModal}
          onBackButtonPress={closeModal}
          onBackdropPress={closeModal}
          style={styles.modal}>
          <SafeAreaView
            style={[
              styles.optionsStyle,
              {backgroundColor: theme.updateProfile.modalBackground},
            ]}>
            <Pressable
              style={styles.optionStyle}
              onPress={() => {
                choosePhotosFromGallery().then();
              }}>
              <Icon
                type={'Entypo'}
                name={'images'}
                color={theme.updateProfile.modalIcon}
                size={theme.text.s7}
              />
              <GenericText
                style={[
                  styles.modalLabel,
                  {
                    fontSize: theme.text.s7,
                    color: theme.updateProfile.modalLabel,
                  },
                ]}>
                {tr('updateProfile.gallery')}
              </GenericText>
            </Pressable>
            <Pressable
              style={styles.optionStyle}
              onPress={() => {
                takePhotoFromCamera().then();
              }}>
              <Icon
                type={'FontAwesome'}
                name={'camera'}
                color={theme.updateProfile.modalIcon}
                size={theme.text.s7}
              />
              <GenericText
                style={[
                  styles.modalLabel,
                  {
                    fontSize: theme.text.s7,
                    color: theme.updateProfile.modalLabel,
                  },
                ]}>
                {tr('updateProfile.camera')}
              </GenericText>
            </Pressable>
          </SafeAreaView>
        </Modal>
      </View>
    </MainLayout>
  );
};
const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps)(UpdateProfile);

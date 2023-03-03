import React, {useEffect, useState} from 'react';
import MainLayout from '../../MainLayout';
import {tr} from '../../../resources/translations';
import GenericTextInput from '../../../components/GenericTextInput';
import {useTheme} from '@react-navigation/native';
import Button from '../../../components/Button';
import {UpdateProfileProps} from '../../../resources/interfaces/screens/updateProfile';
import GenericText from '../../../components/GenericText';
import styles from './styles';
import {ActivityIndicator, Image, Platform, View} from 'react-native';
import {RootState} from '../../../redux/store';
import {connect} from 'react-redux';
import Icon from '../../../components/Icon';
import {SaveUser} from '../../../utils/userFuncs';
import {PersonalInformation} from '../../../resources/interfaces/items/userItem';
import {showToastAndroid} from '../../../utils/funcs';

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
      profileImage: '',
    };
    setLoading(true);
    await SaveUser({personalInfo: temp});
    setLoading(false);
    showToastAndroid(tr('updateProfile.updateDoneAlertMessage'));
  };
  return (
    <MainLayout
      backHeader
      title={tr('updateProfile.headerTitle')}
      onBackIconPress={() => navigation?.goBack()}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={
              personalInfo.profileImage != ''
                ? {uri: personalInfo.profileImage}
                : {
                    uri: 'https://i.postimg.cc/tT700h6t/download.png',
                  }
            }
            resizeMode={'contain'}
            style={[styles.image, {borderColor: theme.homeBackground}]}
          />
          <Icon
            type={'MaterialCommunityIcons'}
            name={'circle-edit-outline'}
            size={theme.text.s7}
            color={theme.updateProfile.icon}
            role={'button'}
            onPress={() => {}}
            style={styles.editIcon}
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
      </View>
    </MainLayout>
  );
};
const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps)(UpdateProfile);

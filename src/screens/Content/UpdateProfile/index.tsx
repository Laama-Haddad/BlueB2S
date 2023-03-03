import React, {useEffect, useState} from 'react';
import MainLayout from '../../MainLayout';
import {tr} from '../../../resources/translations';
import GenericTextInput from '../../../components/GenericTextInput';
import {user} from '../../../resources/staticData/user';
import {useTheme} from '@react-navigation/native';
import Button from '../../../components/Button';
import {UpdateProfileProps} from '../../../resources/interfaces/screens/updateProfile';
import GenericText from '../../../components/GenericText';
import styles from './styles';
import {Image, View} from 'react-native';
import {RootState} from '../../../redux/store';
import {connect} from 'react-redux';
import {setAuthStatus} from '../../Auth/SignIn/action';
import Icon from '../../../components/Icon';

const mandatoryFields = ['fullName', 'mobile', 'email', 'address'];
const UpdateProfile = ({navigation, auth}: UpdateProfileProps) => {
  const [form, updateForm] = useState({
    firstName: user && user.firstName,
    lastName: user && user.lastName,
    mobile: user && user.mobile,
    email: user && user.email,
  });
  const [formComplete, setFormComplete] = useState(false);
  const theme = useTheme();
  const {logged} = auth;
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
        _formComplete = false;
        break;
      }
    }
    if (_formComplete) {
      setFormComplete(true);
      navigation?.goBack();
    }
  }, [form]);
  const submit = async () => {};
  return (
    <MainLayout
      backHeader
      title={tr('updateProfile.headerTitle')}
      onBackIconPress={() => navigation?.goBack()}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={
              logged
                ? {uri: user.profileImage}
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
          placeholder={tr('updateProfile.firstNamePlaceHolder')}
          value={form.firstName}
          onChangeText={text => handleChange('firstName', text)}
          containerStyle={{marginBottom: '3%'}}
        />
        <GenericTextInput
          required
          placeholder={tr('updateProfile.lastNamePlaceHolder')}
          value={form.lastName}
          onChangeText={text => handleChange('lastName', text)}
          containerStyle={{marginBottom: '3%'}}
        />
        <GenericTextInput
          required
          placeholder={tr('updateProfile.mobilePlaceHolder')}
          placeholderTextColor={theme.profile.label}
          value={form.mobile}
          onChangeText={text => handleChange('mobile', text)}
          containerStyle={{marginBottom: '3%'}}
        />
        <GenericTextInput
          required
          placeholder={tr('updateProfile.emailPlaceHolder')}
          placeholderTextColor={theme.profile.label}
          value={form.email}
          onChangeText={text => handleChange('email', text)}
          containerStyle={{marginBottom: '3%'}}
        />
        <View style={styles.bottomContainer}>
          <Button
            title={tr('updateProfile.submit')}
            backgroundColor={theme.updateProfile.submitBackground}
            disabled={!formComplete}
            onPress={() => submit()}
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
});

export default connect(mapStateToProps, {setAuthStatus})(UpdateProfile);

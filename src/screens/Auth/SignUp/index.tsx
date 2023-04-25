import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import MainLayout from '../../MainLayout';
import GenericText from '../../../components/GenericText';
import {tr} from '../../../resources/translations';
import GenericTextInput from '../../../components/GenericTextInput';
import styles from './styles';
import Button from '../../../components/Button';
import {getByScreenSize} from '../../../utils/responsive';
import {useTheme} from '@react-navigation/native';
import {SignUpProps} from '../../../resources/interfaces/screens/signUp';
import Icon from '../../../components/Icon';
import {ToggleAuth} from '../../../utils/authFuncs';
import {SaveUser} from '../../../utils/userFuncs';
import {PersonalInformation} from '../../../resources/interfaces/items/userItem';

const mandatoryFields = [
  'firstName',
  'lastName',
  'mobile',
  'email',
  'password',
  'confirmPassword',
];
const SignUp = ({navigation}: SignUpProps) => {
  const theme = useTheme();
  const [form, updateForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formComplete, setFormComplete] = useState(false);
  const [matchPasswords, setMatchPasswords] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (form.password && form.confirmPassword) {
      setMatchPasswords(form.password === form.confirmPassword);
    } else if (matchPasswords) {
      if (form.password || form.confirmPassword) {
        setMatchPasswords(false);
      }
    }
  }, [form.password, form.confirmPassword]);
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
    }
  }, [form]);
  const submit = async () => {
    setLoading(true);
    ToggleAuth({logged: true}).then();
    let temp: PersonalInformation = {
      firstName: form.firstName,
      lastName: form.lastName,
      mobile: form.mobile,
      email: form.email,
      password: form.password,
      profileImage: null,
    };
    await SaveUser({personalInfo: temp});
    navigation?.navigate('home');
  };
  return (
    <MainLayout enableScroll>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 35}
        animating={loading}
        style={styles.loading}
        color={theme.updateProfile.loading}
      />
      <View style={styles.topContainer}>
        <Icon
          name={'chevron-back'}
          type={'Ionicons'}
          color={theme.signUp.back}
          size={theme.text.s2}
          style={{
            position: 'absolute',
            left: -getByScreenSize(10, 18),
            top: getByScreenSize(5, 10),
            zIndex: 1,
          }}
          onPress={() => navigation?.goBack()}
        />
        <Image
          source={require('../../../resources/assets/images/logo.png')}
          style={{
            width: getByScreenSize(70, 90),
            height: getByScreenSize(70, 90),
          }}
        />
        <GenericText
          style={[
            styles.title,
            {fontSize: theme.text.s6, color: theme.signUp.title},
          ]}>
          {tr('signUp.title')}
        </GenericText>
      </View>
      <GenericText
        style={{
          fontSize: theme.text.s7,
          color: theme.signUp.title,
          textAlign: 'center',
        }}>
        {tr('signUp.subTitle')}
      </GenericText>
      <GenericTextInput
        label={tr('signUp.firstNameLabel')}
        value={form.firstName}
        onChangeText={text => handleChange('firstName', text)}
        required
        containerStyle={styles.textInput}
      />
      <GenericTextInput
        label={tr('signUp.lastNameLabel')}
        value={form.lastName}
        onChangeText={text => handleChange('lastName', text)}
        required
        containerStyle={styles.textInput}
      />
      <GenericTextInput
        label={tr('signUp.mobileLabel')}
        value={form.mobile}
        onChangeText={text => handleChange('mobile', text)}
        keyboardType={'numeric'}
        required
        containerStyle={styles.textInput}
      />
      <GenericTextInput
        label={tr('signUp.emailLabel')}
        value={form.email}
        onChangeText={text => handleChange('email', text)}
        required
        containerStyle={styles.textInput}
      />
      <GenericTextInput
        label={tr('signUp.passwordLabel')}
        value={form.password}
        onChangeText={text => handleChange('password', text)}
        required
        secureTextEntry={form.password.length !== 0}
        noEye={false}
        containerStyle={styles.textInput}
      />
      <GenericTextInput
        label={tr('signUp.confirmPasswordLabel')}
        value={form.confirmPassword}
        onChangeText={text => handleChange('confirmPassword', text)}
        required
        secureTextEntry={form.password.length !== 0}
        noEye={false}
        containerStyle={styles.textInput}
      />
      {!matchPasswords && (
        <GenericText
          style={{fontSize: theme.text.s9, color: theme.signUp.error}}>
          {tr('signUp.errorMessage')}
        </GenericText>
      )}
      <View style={styles.termsContainer}>
        <GenericText
          style={{
            fontSize: theme.text.s9,
            color: theme.signUp.title,
            marginVertical: '2%',
          }}>
          {tr('signUp.agree')}
        </GenericText>
        <TouchableOpacity onPress={() => console.log('conditions')}>
          <GenericText
            style={{
              fontSize: theme.text.s9,
              color: theme.signUp.title,
              textDecorationLine: 'underline',
            }}>
            {tr('signUp.terms')}
          </GenericText>
        </TouchableOpacity>
        <GenericText
          style={{fontSize: theme.text.s9, color: theme.signUp.title}}>
          {' '}
          {tr('signUp.and')}{' '}
        </GenericText>
        <TouchableOpacity onPress={() => navigation?.navigate('privacyPolicy')}>
          <GenericText
            style={{
              fontSize: theme.text.s9,
              color: theme.signUp.title,
              textDecorationLine: 'underline',
            }}>
            {tr('signUp.privacy')}
          </GenericText>
        </TouchableOpacity>
      </View>
      <Button
        title={tr('signUp.title')}
        backgroundColor={theme.signUp.submitBackground}
        disabled={!formComplete || !matchPasswords}
        onPress={() => formComplete && matchPasswords && submit()}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: '5%',
          paddingBottom: '7%',
        }}>
        <GenericText
          style={{fontSize: theme.text.s9, color: theme.signUp.already}}>
          {tr('signUp.already')}
          {'  '}
        </GenericText>
        <TouchableOpacity onPress={() => navigation?.navigate('signIn')}>
          <GenericText
            style={{
              fontSize: theme.text.s9,
              fontWeight: 'bold',
              color: theme.signUp.submitBackground,
            }}>
            {tr('signUp.signIn')}
          </GenericText>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};
export default SignUp;

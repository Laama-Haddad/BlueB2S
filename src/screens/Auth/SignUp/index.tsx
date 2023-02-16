import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MainLayout from '../../MainLayout';
import GenericText from '../../../components/GenericText';
import {tr} from '../../../resources/translations';
import GenericTextInput from '../../../components/GenericTextInput';
import styles from './styles';
import Button from '../../../components/Button';
import LogoSVG from '../../../resources/assets/svg/logo.svg';
import {getByScreenSize} from '../../../utils/responsive';
import {useTheme} from '@react-navigation/native';
import {SignUpProps} from '../../../resources/interfaces/screens/signUp';

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
    // ToggleAuth({logged: true}).then();
  };
  return (
    <MainLayout enableScroll>
      <View style={styles.topContainer}>
        <LogoSVG
          width={getByScreenSize(50, 70)}
          height={getByScreenSize(50, 70)}
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
        value={form.email}
        onChangeText={text => handleChange('password', text)}
        required
        secureTextEntry
        noEye={false}
        containerStyle={styles.textInput}
      />
      <GenericTextInput
        label={tr('signUp.confirmPasswordLabel')}
        value={form.email}
        onChangeText={text => handleChange('confirmPassword', text)}
        required
        secureTextEntry
        noEye={false}
        containerStyle={styles.textInput}
      />
      <View style={styles.termsContainer}>
        <GenericText
          style={{fontSize: theme.text.s9, color: theme.signUp.title}}>
          {tr('signUp.agree')}
        </GenericText>
        <GenericText
          style={{
            fontSize: theme.text.s9,
            color: theme.signUp.title,
            textDecorationLine: 'underline',
          }}>
          {tr('signUp.terms')}
        </GenericText>
        <GenericText
          style={{fontSize: theme.text.s9, color: theme.signUp.title}}>
          {' '}
          {tr('signUp.and')}{' '}
        </GenericText>
        <GenericText
          style={{
            fontSize: theme.text.s9,
            color: theme.signUp.title,
            textDecorationLine: 'underline',
          }}>
          {tr('signUp.privacy')}
        </GenericText>
      </View>
      <Button
        title={tr('signUp.title')}
        backgroundColor={theme.signUp.submitBackground}
        onPress={() => submit()}
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
            style={{fontSize: theme.text.s9, color: theme.signUp.title}}>
            {tr('signUp.signIn')}
          </GenericText>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};
export default SignUp;

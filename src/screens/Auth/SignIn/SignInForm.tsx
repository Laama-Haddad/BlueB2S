import GenericTextInput from '../../../components/GenericTextInput';
import {tr} from '../../../resources/translations';
import styles from './styles';
import Button from '../../../components/Button';
import {
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import GenericText from '../../../components/GenericText';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {ToggleAuth} from '../../../utils/authFuncs';
import {SignInFormProps} from '../../../resources/interfaces/screens/signInForm';
import {useSelector} from 'react-redux';
import config from '../../../config';

const mandatoryFields = ['email', 'password'];
const SignInForm = ({navigation, title}: SignInFormProps) => {
  const theme = useTheme();
  const user = useSelector(state => state?.user);
  const {personalInfo} = user;
  const [form, updateForm] = useState({
    email: '',
    password: '',
  });
  const [formComplete, setFormComplete] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (key, value) => {
    updateForm({
      ...form,
      [key]: value,
    });
  };
  if (config.debug) {
    console.log(user);
  }
  useEffect(() => {
    setError(false);
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
    if (
      personalInfo.email.toLowerCase() === form.email.toLowerCase() &&
      personalInfo.password === form.password
    ) {
      setLoading(true);
      ToggleAuth({logged: true}).then();
      navigation?.goBack();
    } else {
      setError(true);
    }
  };
  return (
    <>
      <GenericText
        style={{
          fontWeight: '700',
          fontSize: theme.text.s6,
          color: theme.signIn.title,
          textAlign: 'center',
          marginVertical: '5%',
        }}>
        {title}
      </GenericText>
      <GenericTextInput
        label={tr('signIn.emailLabel')}
        value={form.email}
        onChangeText={text => handleChange('email', text)}
        required
      />
      <GenericTextInput
        label={tr('signIn.passwordLabel')}
        value={form.password}
        onChangeText={text => handleChange('password', text)}
        required
        secureTextEntry={form.password.length !== 0}
        containerStyle={styles.passwordTextInput}
      />
      {error && (
        <GenericText
          style={{
            fontSize: theme.text.s9,
            color: theme.signIn.error,
            marginBottom: '9%',
            marginTop: '-5%',
          }}>
          {tr('signIn.errorMessage')}
        </GenericText>
      )}
      <Button
        title={tr('signIn.title')}
        backgroundColor={theme.signIn.submitBackground}
        disabled={!formComplete}
        onPress={() => formComplete && submit()}
      />
      <TouchableOpacity onPress={() => console.log('forgot')}>
        <GenericText
          style={[
            styles.forgot,
            {
              fontSize: theme.text.s9,
              color: theme.signIn.forgot,
            },
          ]}>
          {tr('signIn.forgot')}
        </GenericText>
      </TouchableOpacity>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 35}
        animating={loading}
        style={{marginVertical: '3%'}}
        color={theme.updateProfile.loading}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <GenericText
          style={{fontSize: theme.text.s8, color: theme.signIn.title}}>
          {tr('signIn.new')}
        </GenericText>
        <TouchableOpacity onPress={() => navigation?.navigate('signUp')}>
          <GenericText
            style={{
              fontSize: theme.text.s8,
              color: theme.signIn.appName,
            }}>
            {' '}
            {tr('app.appName')}?{' '}
          </GenericText>
        </TouchableOpacity>
        <GenericText
          style={{fontSize: theme.text.s8, color: theme.signIn.title}}>
          {tr('signIn.signUp')}
        </GenericText>
      </View>
    </>
  );
};
export default SignInForm;

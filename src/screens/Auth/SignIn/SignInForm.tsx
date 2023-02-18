import GenericTextInput from '../../../components/GenericTextInput';
import {tr} from '../../../resources/translations';
import styles from './styles';
import Button from '../../../components/Button';
import {TouchableOpacity, View} from 'react-native';
import GenericText from '../../../components/GenericText';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {ToggleAuth} from '../../../utils/authFuncs';
import {SignInFormProps} from '../../../resources/interfaces/screens/signInForm';

const mandatoryFields = ['email', 'password'];
const SignInForm = ({navigation, title}: SignInFormProps) => {
  const theme = useTheme();
  const [form, updateForm] = useState({
    email: '',
    password: '',
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
    ToggleAuth({logged: true}).then();
    navigation?.goBack();
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
        secureTextEntry
        noEye={false}
        containerStyle={styles.passwordTextInput}
      />
      <Button
        title={tr('signIn.title')}
        backgroundColor={theme.signIn.submitBackground}
        onPress={() => submit()}
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

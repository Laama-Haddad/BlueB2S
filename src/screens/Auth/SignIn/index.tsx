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

const mandatoryFields = ['email', 'password'];
const SignIn = () => {
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
    // ToggleAuth({logged: true}).then();
  };
  return (
    <MainLayout>
      <View style={styles.topContainer}>
        <LogoSVG
          width={getByScreenSize(50, 70)}
          height={getByScreenSize(50, 70)}
        />
        <GenericText
          style={[
            styles.title,
            {fontSize: theme.text.s6, color: theme.signIn.title},
          ]}>
          {tr('signIn.title')}
        </GenericText>
      </View>
      <GenericTextInput
        label={tr('signIn.emailLabel')}
        value={form.email}
        onChangeText={text => handleChange('email', text)}
        required
      />
      <GenericTextInput
        label={tr('signIn.passwordLabel')}
        value={form.email}
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
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row'}}>
          <GenericText
            style={{fontSize: theme.text.s8, color: theme.signIn.title}}>
            {tr('signIn.new')}
          </GenericText>
          <TouchableOpacity onPress={() => console.log('appname')}>
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
        <TouchableOpacity onPress={() => console.log('guest')}>
          <GenericText
            style={{fontSize: theme.text.s9, color: theme.signIn.guest}}>
            {tr('signIn.guest')}?
          </GenericText>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};
export default SignIn;

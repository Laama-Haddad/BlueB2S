import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import MainLayout from '../../MainLayout';
import GenericText from '../../../components/GenericText';
import {tr} from '../../../resources/translations';
import styles from './styles';
import LogoSVG from '../../../resources/assets/svg/logo.svg';
import {getByScreenSize} from '../../../utils/responsive';
import {useTheme} from '@react-navigation/native';
import {SignInProps} from '../../../resources/interfaces/screens/signIn';
import SignInForm from './SignInForm';
import Icon from '../../../components/Icon';

const SignIn = ({navigation}: SignInProps) => {
  const theme = useTheme();
  return (
    <MainLayout>
      <View style={styles.topContainer}>
        <Icon
          name={'chevron-back'}
          type={'Ionicons'}
          color={theme.signUp.back}
          size={theme.text.s2}
          style={{
            position: 'absolute',
            left: -getByScreenSize(12, 18),
            top: getByScreenSize(5, 10),
            zIndex: 1,
          }}
          onPress={() => navigation?.goBack()}
        />
        <LogoSVG
          width={getByScreenSize(70, 90)}
          height={getByScreenSize(70, 90)}
        />
      </View>
      <SignInForm navigation={navigation} title={tr('signIn.title')} />
      <TouchableOpacity onPress={() => console.log('guest')}>
        <GenericText
          style={{
            fontSize: theme.text.s9,
            color: theme.signIn.guest,
            textAlign: 'center',
          }}>
          {tr('signIn.guest')}?
        </GenericText>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default SignIn;

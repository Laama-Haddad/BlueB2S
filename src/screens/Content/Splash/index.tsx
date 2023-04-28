import React, {useEffect} from 'react';
import MainLayout from '../../MainLayout';
import {SplashProps} from '../../../resources/interfaces/screens/splash';
import {useTheme} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {getByScreenSize} from '../../../utils/responsive';
import GenericText from '../../../components/GenericText';
import {tr} from '../../../resources/translations';
import styles from './styles';

const Splash = ({navigation}: SplashProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation?.navigate('homeTabs');
    }, 1000);
  });
  const theme = useTheme();
  return (
    <MainLayout>
      <View style={styles.container}>
        <Image
          source={require('../../../resources/assets/images/logo.png')}
          style={{
            width: getByScreenSize(140, 220),
            height: getByScreenSize(140, 220),
          }}
        />
        <GenericText
          style={[
            styles.label,
            {fontSize: theme.text.s4, color: theme.splash.text},
          ]}>
          {tr('app.appName')}
        </GenericText>
      </View>
    </MainLayout>
  );
};
export default Splash;

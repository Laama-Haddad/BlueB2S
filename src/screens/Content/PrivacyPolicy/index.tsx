import React from 'react';
import MainLayout from '../../MainLayout';
import {View} from 'react-native';
import styles from './styles';
import {tr} from '../../../resources/translations';
import GenericText from '../../../components/GenericText';
import {useTheme} from '@react-navigation/native';
import {hdp} from '../../../utils/responsive';
import {PrivacyPolicyProps} from '../../../resources/interfaces/screens/privacyPoilcy';

const PrivacyPolicy = ({navigation}: PrivacyPolicyProps) => {
  const theme = useTheme();
  return (
    <MainLayout
      backHeader
      onBackIconPress={() => navigation?.goBack()}
      title={tr('privacyPolicy.headerTitle')}>
      <View style={styles.container}>
        <GenericText
          style={[
            styles.title,
            {color: theme.privacyPolicy.text, fontSize: theme.text.s8},
          ]}>
          {tr('privacyPolicy.title')}
        </GenericText>
        <GenericText
          style={[{color: theme.privacyPolicy.text, fontSize: theme.text.s9}]}>
          {tr('privacyPolicy.description')}
        </GenericText>
        <View style={{height: hdp(15), width: '100%'}} />
      </View>
    </MainLayout>
  );
};
export default PrivacyPolicy;

import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {HomeProps} from '../../../resources/interfaces/screens/home';
import GenericText from '../../../components/GenericText';

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <GenericText>Home</GenericText>
    </View>
  );
};
export default Home;

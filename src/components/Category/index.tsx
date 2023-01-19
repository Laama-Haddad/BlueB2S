import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import {CategoryProps} from '../../resources/interfaces/components/category';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {Image} from 'react-native';
import GenericText from '../GenericText';

const Category = ({details, containerStyle}: CategoryProps) => {
  const theme = useTheme();
  return (
    <Ripple
      rippleContainerBorderRadius={4}
      rippleColor={theme.category.ripple}
      style={[
        styles.container,
        {backgroundColor: theme.category.background},
        containerStyle,
      ]}>
      {/*<Shadow*/}
      {/*  distance={4}*/}
      {/*  startColor={theme.category.shadowStart}*/}
      {/*  endColor={theme.category.shadowEnd}*/}
      {/*  offset={[-1, 4]}*/}
      {/*  style={styles.imageContainer}>*/}
      <Image
        source={{uri: details.imageUri}}
        resizeMode={'stretch'}
        style={[styles.image]}
      />
      {/*</Shadow>*/}
      <GenericText
        style={[
          styles.categoryNameText,
          {color: theme.category.name, fontSize: theme.text.s7},
        ]}>
        {details.name}
      </GenericText>
    </Ripple>
  );
};
export default Category;

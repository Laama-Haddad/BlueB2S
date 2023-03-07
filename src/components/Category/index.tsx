import React from 'react';
import {useTheme} from '@react-navigation/native';
import {CategoryProps} from '../../resources/interfaces/components/category';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {Image, View} from 'react-native';
import GenericText from '../GenericText';
import {getByScreenSize} from '../../utils/responsive';

const Category = ({details, containerStyle}: CategoryProps) => {
  const theme = useTheme();
  return (
    <Ripple
      rippleContainerBorderRadius={4}
      rippleColor={theme.category.ripple}
      style={[styles.container, containerStyle]}>
      <View
        style={[styles.imageContainer, {borderColor: theme.category.border}]}>
        <Image
          source={{uri: details.categoryImageUri}}
          resizeMode={'cover'}
          style={[styles.image]}
        />
      </View>
      <GenericText
        style={[
          styles.categoryNameText,
          {
            color: theme.category.name,
            fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
          },
        ]}>
        {details.categoryName}
      </GenericText>
    </Ripple>
  );
};
export default Category;

import React from 'react';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {ButtonProps} from '../../resources/interfaces/components/button';
import GenericText from '../GenericText';
import {useTheme} from '@react-navigation/native';
const Button = ({
  title,
  titleColor,
  backgroundColor,
  containerStyle,
  onPress,
}: ButtonProps) => {
  const theme = useTheme();
  return (
    <Ripple
      rippleContainerBorderRadius={6}
      style={[
        styles.ripple,
        {backgroundColor: backgroundColor},
        containerStyle,
      ]}
      onPress={onPress}>
      <GenericText
        style={[
          styles.title,
          {
            fontSize: theme.text.s7,
            color: titleColor ? titleColor : theme.button.title,
          },
        ]}>
        {title}
      </GenericText>
    </Ripple>
  );
};
export default Button;

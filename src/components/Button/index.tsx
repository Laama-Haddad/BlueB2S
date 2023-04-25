import React from 'react';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {ButtonProps} from '../../resources/interfaces/components/button';
import GenericText from '../GenericText';
import {useTheme} from '@react-navigation/native';

const Button = ({
  title,
  titleColor,
  titleStyle,
  backgroundColor,
  containerStyle,
  onPress,
  disabled = false,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  return (
    <Ripple
      rippleContainerBorderRadius={6}
      style={[
        styles.ripple,
        {backgroundColor: disabled ? `${backgroundColor}55` : backgroundColor},
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <GenericText
        style={[
          styles.title,
          {
            fontSize: theme.text.s7,
            color: titleColor ? titleColor : theme.button.title,
          },
          titleStyle,
        ]}>
        {title}
      </GenericText>
    </Ripple>
  );
};
export default Button;

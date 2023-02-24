import React from 'react';
import {CirclePaymentMethodProps} from '../../resources/interfaces/components/circlePaymentMethod';
import {View} from 'react-native';
import styles from './styles';
import GenericText from '../GenericText';
import {useTheme} from '@react-navigation/native';
const CirclePaymentMethod = ({
  paymentMethodItem,
  style,
  selected = false,
}: CirclePaymentMethodProps) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.outlineCircle,
          {borderColor: theme.circlePaymentMethod.outlineCircle},
        ]}>
        {selected && (
          <View
            style={[
              styles.solidCircle,
              {backgroundColor: theme.circlePaymentMethod.solidCircle},
            ]}
          />
        )}
      </View>
      <GenericText
        style={[
          styles.radioText,
          {
            fontSize: theme.text.s8,
            backgroundColor: theme.circlePaymentMethod.grayContainerBackground,
            color: theme.circlePaymentMethod.text,
          },
        ]}>
        {paymentMethodItem.name}
      </GenericText>
    </View>
  );
};
export default CirclePaymentMethod;

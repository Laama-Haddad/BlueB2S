import {PaymentMethodItem} from '../items/paymentMethodItem';
import {StyleProp} from 'react-native';

export interface CirclePaymentMethodProps {
  paymentMethodItem: PaymentMethodItem;
  style?: StyleProp<any> | StyleProp<any>[];
  selected?: boolean;
}

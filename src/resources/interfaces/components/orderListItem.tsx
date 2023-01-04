import {StyleProp} from 'react-native';

export interface OrderListItemProps {
  status: 'cancel' | 'delivered' | 'shipped';
  orderNumber: string;
  orderDate: string;
  deliverDate: string;
  numOfItems: number;
  price: number;
  paymentType: 'paid' | 'onDelivery';
  containerStyle?: StyleProp<any> | StyleProp<any>[];
  onPress?: () => void;
}

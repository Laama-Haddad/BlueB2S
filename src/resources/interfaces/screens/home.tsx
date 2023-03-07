import {NavigationProp} from '@react-navigation/native';
import {CartState} from './cart';

export interface HomeProps {
  navigation?: NavigationProp<any>;
  cart: CartState;
}

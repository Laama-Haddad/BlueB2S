import {NavigationProp} from '@react-navigation/native';
import {CartItem} from '../items/cartItem';

export interface CartState {
  cartList: CartItem[];
}
export interface CartProps {
  navigation?: NavigationProp<any>;
  cart: CartState;
}

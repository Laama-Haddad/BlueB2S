import {NavigationProp} from '@react-navigation/native';
import {CartState} from './cart';
import {AuthState} from './signIn';

export interface FavoriteState {
  favoriteList: number[];
}

export interface FavoriteProps {
  navigation?: NavigationProp<any>;
  favorite: FavoriteState;
  cart: CartState;
  auth: AuthState;
}

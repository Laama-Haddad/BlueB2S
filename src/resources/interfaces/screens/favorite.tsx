import {NavigationProp} from '@react-navigation/native';
import {CartState} from './cart';

export interface FavoriteState {
  favoriteList: number[];
}

export interface FavoriteProps {
  navigation?: NavigationProp<any>;
  favorite: FavoriteState;
  cart: CartState;
}

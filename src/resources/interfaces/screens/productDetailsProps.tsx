import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ProductItem} from '../items/productItem';
import {CartState} from './cart';
import {FavoriteState} from './favorite';

export interface ProductDetailsProps {
  route?: RouteProp<{params: {details: ProductItem}}, 'params'>;
  navigation?: NavigationProp<any>;
  cart: CartState;
  favorite: FavoriteState;
}

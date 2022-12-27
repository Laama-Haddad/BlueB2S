import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ProductItem} from '../items/productItem';

export interface ProductDetailsProps {
  route?: RouteProp<{params: {details: ProductItem}}, 'params'>;
  navigation?: NavigationProp<any>;
}

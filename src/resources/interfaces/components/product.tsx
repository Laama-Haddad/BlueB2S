import {StyleProp} from 'react-native';
import {ProductItem} from '../items/productItem';

export interface ProductProps {
  details: ProductItem;
  containerStyle?: StyleProp<any> | StyleProp<any>[];
}

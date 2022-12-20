import {StyleProp} from 'react-native';
import {CategoryItem} from '../items/categoryItem';

export interface CategoryProps {
  details: CategoryItem;
  containerStyle?: StyleProp<any> | StyleProp<any>[];
}

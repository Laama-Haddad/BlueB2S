import {StyleProp} from 'react-native';
import {ImageItem} from '../items/imageItem';
import {NavigationProp} from '@react-navigation/native';

export interface AnimationPaginationDotsProps {
  data: ImageItem[];
  containerStyle?: StyleProp<any> | StyleProp<any>[];
  navigation?: NavigationProp<any>;
}

import {StyleProp} from 'react-native';

export interface CartIconProps {
  size?: number;
  isAddedToCart?: boolean;
  style?: StyleProp<any> | StyleProp<any>[];
  onCartItemsChange?: () => void;
}

import {ReactElement} from 'react';
import {StyleProp} from 'react-native';
import {RadioItemProps} from '../items/radioItem';

export interface RadioGroupProps {
  list: RadioItemProps[];
  renderItem: (arg0: RadioItemProps, arg1: number) => ReactElement | null;
  onValueChange?: (arg0: number) => void;
  selected?: number;
  style?: StyleProp<any> | StyleProp<any>[];
}

import {StyleProp} from 'react-native';

export interface IconProps {
  type: string;
  label?: string;
  onPress?: () => void;
  style?: StyleProp<any> | StyleProp<any>[];
  role?: string;
  name: string;
  size?: number;
  color?: string;
  stroke?: string;
  loading?: boolean;
  background?: string;
  border?: string;
  disabled?: boolean;
}

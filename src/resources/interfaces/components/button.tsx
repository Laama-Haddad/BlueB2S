import {StyleProp} from 'react-native';

export interface ButtonProps {
  title: string;
  titleColor?: string;
  backgroundColor: string;
  containerStyle?: StyleProp<any> | StyleProp<any>[];
  onPress: () => void;
}

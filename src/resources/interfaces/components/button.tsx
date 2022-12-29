import {StyleProp} from 'react-native';

export interface ButtonProps {
  title: string;
  titleColor?: string;
  titleStyle?: StyleProp<any> | StyleProp<any>[];
  backgroundColor: string;
  containerStyle?: StyleProp<any> | StyleProp<any>[];
  onPress: () => void;
}

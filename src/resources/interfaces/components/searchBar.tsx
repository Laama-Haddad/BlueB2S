import {StyleProp, TextInputAndroidProps} from 'react-native';

export interface SearchBarProps extends TextInputAndroidProps {
  searchBarStyle?: StyleProp<any> | StyleProp<any>[];
  textInputStyle?: StyleProp<any> | StyleProp<any>[];
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onEndEditing?: (text: string) => void;
}

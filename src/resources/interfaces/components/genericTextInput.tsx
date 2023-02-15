import {StyleProp, TextInputAndroidProps} from 'react-native';
export interface GenericTextInputProps extends TextInputAndroidProps {
  textInputStyle?: StyleProp<any> | StyleProp<any>[];
  containerStyle?: StyleProp<any> | StyleProp<any>[];
  label?: string;
  secureTextEntry?: boolean;
  noEye?: boolean;
  required?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onEndEditing?: (text: string) => void;
  maxLength?: number;
  multiline?: boolean;
  editable?: boolean;
}

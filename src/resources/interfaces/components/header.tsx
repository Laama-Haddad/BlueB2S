import {StyleProp} from 'react-native';

export interface HeaderProps {
  noPaddingTop?: boolean;
  isModal?: boolean;
  headerBackground?: string;
  title?: string;
  titleColor?: string;
  titleStyle?: StyleProp<any> | StyleProp<any>[];
  showBackIcon?: boolean;
  backIconColor?: string;
  showMenuIcon?: boolean;
  menuIconColor?: string;
  iconSize?: number;
  iconStyle?: StyleProp<any> | StyleProp<any>[];
  onBackIconPress?: () => void;
  onMenuIconPress?: () => void;
  showLogo?: boolean;
  headerStyle?: StyleProp<any> | StyleProp<any>[];
}

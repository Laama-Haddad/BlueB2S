import {StyleProp} from 'react-native';

export interface FavoriteProps {
  size?: number;
  isFavorite: boolean;
  disable?: boolean;
  style?: StyleProp<any> | StyleProp<any>[];
  onToggleFavorite?: () => void;
}

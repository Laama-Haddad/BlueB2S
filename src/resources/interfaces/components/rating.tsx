import {StyleProp} from 'react-native';

export interface RatingProps {
  rating: number;
  onChange?: (value: number) => void;
  maxStars?: number;
  starSize?: number;
  fullStarColor?: string;
  emptyStarColor?: string;
  starStyle?: StyleProp<any> | StyleProp<any>[];
  containerStyle?: StyleProp<any> | StyleProp<any>[];
  enableHalfStar?: boolean;
  enableSwiping?: boolean;
  onRatingStart?: () => void;
  onRatingEnd?: () => void;
  onPress?: () => void;
}

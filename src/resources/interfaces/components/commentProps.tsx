import {CommentItem} from '../items/commentItem';
import {StyleProp} from 'react-native';

export interface CommentProps extends CommentItem {
  containerStyle?: StyleProp<any> | StyleProp<any>[];
}

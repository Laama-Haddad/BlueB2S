import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ImageItem} from '../items/imageItem';

export interface ImageViewerProps {
  navigation?: NavigationProp<any>;
  route: RouteProp<{params: {image: ImageItem}}, 'params'>;
}

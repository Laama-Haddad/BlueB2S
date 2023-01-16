import {StyleProp} from 'react-native';

export interface CartItemProps {
  productId: number;
  imageUri: string;
  title: string;
  price: number;
  size: string;
  selectedQuantity: number;
  onQuantityChange: ({quantity, id: number}) => void;
  onDeletePress: () => void;
  containerStyle?: StyleProp<any> | StyleProp<any>[];
}

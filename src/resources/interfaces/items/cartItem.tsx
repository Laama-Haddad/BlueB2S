import {ProductItem} from './productItem';

export interface CartItem extends ProductItem {
  itemCartId: number;
  quantity: number;
}

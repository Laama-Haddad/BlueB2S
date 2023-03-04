import {ProductItem} from './productItem';

export interface CategoryItem {
  id: number;
  categoryName: string;
  categoryImageUri: string;
  productsList: ProductItem[];
}

import {ImageItem} from './imageItem';
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  offerPrice: number;
  size: string;
  imageUri: string;
  images: ImageItem[];
  rating: number;
  description: string;
}

import {ImageItem} from './imageItem';

export interface CommentItem {
  id: number;
  ownerName: string;
  ownerImage?: ImageItem | null;
  comment: string;
  rating: number;
  time: string;
  productId: number;
}

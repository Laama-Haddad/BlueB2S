export interface FavoriteItemProps {
  productId: number;
  imageUri: string;
  title: string;
  price: number;
  size: string;
  isFavorite?: boolean;
  rating?: number;
  containerStyle?: Object | any[];
  toggleFavorite?: ({isFavorite: boolean, id: number}) => void;
  isAddedToCart?: boolean;
  onPressCartIcon?: ({inCart: boolean, id: number}) => void;
  onPress?: () => void;
}

import {FavoriteItemProps} from '../../resources/interfaces/components/favoriteItem';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import GenericText from '../GenericText';
import {useTheme} from '@react-navigation/native';
import Rating from '../Rating';
import Favorite from '../Favorite';
import CartIcon from '../CartIcon';
import {tr} from '../../resources/translations';

const FavoriteItem = ({
  productId,
  imageUri,
  title,
  price,
  size,
  isFavorite = true,
  rating = 0,
  containerStyle,
  toggleFavorite,
  isAddedToCart = false,
  onPressCartIcon,
  onPress,
}: FavoriteItemProps) => {
  const theme = useTheme();
  const onChangeFavorite = () => {
    if (toggleFavorite) {
      toggleFavorite({isFavorite: !isFavorite, id: productId});
    }
  };
  const onChangeAddedToCart = () => {
    if (onPressCartIcon) {
      onPressCartIcon({inCart: !isAddedToCart, id: productId});
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderColor: theme.favoriteItem.containerBorder},
        containerStyle,
      ]}
      onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: imageUri}}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>
      <View style={styles.middleContainer}>
        <GenericText
          style={[
            styles.text,
            {fontSize: theme.text.s8, color: theme.favoriteItem.title},
          ]}>
          {title} {size}
        </GenericText>
        {rating !== 0 && <Rating rating={rating} />}
        <GenericText
          style={[
            styles.text,
            {fontSize: theme.text.s7, color: theme.favoriteItem.price},
          ]}>
          {price} {tr('app.currency')}
        </GenericText>
      </View>
      <Favorite
        onToggleFavorite={() => onChangeFavorite()}
        isFavorite={isFavorite}
        style={styles.favorite}
      />
      <CartIcon
        isAddedToCart={isAddedToCart}
        onCartItemsChange={() => onChangeAddedToCart()}
        style={styles.cart}
      />
    </TouchableOpacity>
  );
};
export default FavoriteItem;

import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ProductProps} from '../../resources/interfaces/components/product';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import GenericText from '../GenericText';
import {tr} from '../../resources/translations';
import CartIcon from '../CartIcon';

const Product = ({
  details,
  onPress,
  isAddedToCart = false,
  onPressCartIcon,
  cartStyle,
  containerStyle,
  isShowCart = true,
}: ProductProps) => {
  const theme = useTheme();
  const onChangeAddedToCart = () => {
    if (onPressCartIcon) {
      onPressCartIcon({inCart: !isAddedToCart, id: details.id});
    }
  };
  return (
    <TouchableOpacity
      disabled={!onPress}
      style={[
        styles.container,
        {backgroundColor: theme.product.background},
        containerStyle,
      ]}
      onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image
          source={{
            uri: details.imageUri
              ? details?.imageUri
              : 'https://i.postimg.cc/ZK0P5f4M/image-preview-icon-picture-placeholder-vector-31284806.jpg',
          }}
          resizeMode={'stretch'}
          style={[styles.image]}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.topRightContainer}>
          <GenericText
            style={[
              styles.productNameText,
              {fontSize: theme.text.s10, color: theme.product.name},
            ]}>
            {details.name}
          </GenericText>
        </View>
        <View style={styles.bottomRightContainer}>
          <GenericText
            style={[
              styles.productOfferPriceText,
              {fontSize: theme.text.s10, color: theme.product.offerPrice},
            ]}>
            {details.offerPrice} {tr('app.currency')}
          </GenericText>
          <GenericText
            style={[
              styles.productPriceText,
              {fontSize: theme.text.s10, color: theme.product.price},
            ]}>
            {details.price} {tr('app.currency')}
          </GenericText>
          {isShowCart && (
            <CartIcon
              isAddedToCart={isAddedToCart}
              onCartItemsChange={() => onChangeAddedToCart()}
              style={[styles.cart, cartStyle]}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

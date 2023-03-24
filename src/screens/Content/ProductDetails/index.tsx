import React, {useEffect, useState} from 'react';
import {View, Share} from 'react-native';
import styles from './styles';
import MainLayout from '../../MainLayout';
import {useTheme} from '@react-navigation/native';
import {ProductDetailsProps} from '../../../resources/interfaces/screens/productDetailsProps';
import {tr} from '../../../resources/translations';
import GenericText from '../../../components/GenericText';
import Ripple from 'react-native-material-ripple';
import {getByScreenSize} from '../../../utils/responsive';
import Icon from '../../../components/Icon';
import AnimatedPaginationDots from '../../../components/AnimatedPaginationDots';
import Rating from '../../../components/Rating';
import Favorite from '../../../components/Favorite';
import Button from '../../../components/Button';
import {CartItem} from '../../../resources/interfaces/items/cartItem';
import {ProductItem} from '../../../resources/interfaces/items/productItem';
import {updateCartList} from '../../../utils/cartFuncs';
import {RootState} from '../../../redux/store';
import {connect} from 'react-redux';
import {updateFavoriteList} from '../../../utils/favoriteFuncs';

const ProductDetails = ({
  navigation,
  route,
  cart,
  favorite,
  auth,
}: ProductDetailsProps) => {
  const theme = useTheme();
  const {cartList} = cart;
  const {favoriteList} = favorite;
  const {logged} = auth;
  const {
    description,
    images,
    name,
    offerPrice,
    price,
    rating,
    size,
    id,
    imageUri,
  } = route?.params.details;
  const [ratingValue, setRatingValue] = useState(rating);
  const [exist, setExist] = useState(
    cartList.findIndex(cartItem => cartItem.id === id) > -1,
  );
  const [fav, setFav] = useState(favoriteList.includes(id));
  const changeFavoriteList = () => {
    let newValue = !favoriteList.includes(id);
    setFav(newValue);
    updateFavoriteList(favoriteList, id, newValue).then();
  };
  const updateCart = (item: ProductItem) => {
    const tempItem: CartItem = {
      ...item,
      itemCartId: cartList.length,
      quantity: 1,
    };
    updateCartList(cartList, tempItem, exist).then();
    if (!exist) {
      navigation?.navigate('cart');
    }
  };
  useEffect(() => {
    setExist(
      cartList.findIndex(cartItem => cartItem.id === route?.params.details.id) >
        -1,
    );
    setFav(favoriteList.includes(id));
  }, [favoriteList, cartList, id, route?.params.details.id]);
  const handleShare = async () => {
    try {
      await Share.share({
        message: `${name} - ${description} - ${imageUri}`,
        url: imageUri,
      });
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <MainLayout
      enableScroll
      backHeader
      title={tr('productDetails.headerTitle')}
      onBackIconPress={() => navigation?.goBack()}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <GenericText
              style={[
                styles.title,
                {fontSize: theme.text.s8, color: theme.productDetails.title},
              ]}>
              {name}
              {'   '}
              {size}
            </GenericText>
            <Ripple
              rippleContainerBorderRadius={getByScreenSize(6, 10)}
              style={[
                styles.shareRipple,
                {
                  backgroundColor: theme.productDetails.shareIconBackground,
                },
              ]}
              onPress={() => handleShare()}>
              <Icon
                type={'Entypo'}
                name={'share'}
                size={getByScreenSize(theme.text.s6, theme.text.s5)}
                color={theme.productDetails.shareIcon}
              />
            </Ripple>
          </View>
          <GenericText
            style={[
              styles.description,
              {
                color: theme.productDetails.description,
                fontSize: theme.text.s9,
              },
            ]}>
            {description}
          </GenericText>
        </View>
        <View style={styles.centerContainer}>
          <AnimatedPaginationDots data={images} navigation={navigation} />
          {logged && (
            <Favorite
              isFavorite={fav}
              onToggleFavorite={() => changeFavoriteList()}
              style={{
                position: 'absolute',
                right: getByScreenSize(8, 13),
                top: getByScreenSize(38, 55),
              }}
            />
          )}
          {/*<CartIcon*/}
          {/*  isAddedToCart={exist}*/}
          {/*  onCartItemsChange={() => updateCart(route?.params?.details)}*/}
          {/*/>*/}
          <View style={styles.ratingContainer}>
            <View>
              <GenericText
                style={{
                  fontSize: theme.text.s7,
                  color: theme.productDetails.offerPrice,
                }}>
                {offerPrice} {tr('app.currency')}
              </GenericText>
              <GenericText
                style={{
                  fontSize: theme.text.s7,
                  color: theme.productDetails.price,
                  textDecorationLine: 'line-through',
                }}>
                {price} {tr('app.currency')}
              </GenericText>
            </View>
            <Rating
              rating={ratingValue}
              starSize={theme.text.s6}
              onChange={setRatingValue}
              onRatingStart={() =>
                navigation?.navigate('productReview', {
                  details: route?.params.details,
                })
              }
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Button
            disabled={exist}
            title={tr('productDetails.addToCart')}
            backgroundColor={theme.productDetails.addButtonBackground}
            onPress={() => updateCart(route?.params?.details)}
            containerStyle={styles.buttonStyle}
          />
          <Button
            title={tr('productDetails.buy')}
            backgroundColor={theme.productDetails.buyButtonBackground}
            onPress={() => {}}
            containerStyle={styles.buttonStyle}
          />
        </View>
      </View>
    </MainLayout>
  );
};
const mapStateToProps = (state: RootState) => ({
  cart: state.cart,
  favorite: state.favorite,
  auth: state.auth,
});

export default connect(mapStateToProps)(ProductDetails);

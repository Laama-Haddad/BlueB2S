import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import MainLayout from '../../MainLayout';
import {useTheme} from '@react-navigation/native';
import {ProductDetailsProps} from '../../../resources/interfaces/screens/productDetailsProps';
import {tr} from '../../../resources/translations';
import GenericText from '../../../components/GenericText';
import Ripple from 'react-native-material-ripple';
import {getByScreenSize} from '../../../utils/responsive';
import Icon from '../../../components/Icon';
import {Shadow} from 'react-native-shadow-2';
import AnimatedPaginationDots from '../../../components/AnimatedPaginationDots';
import Rating from '../../../components/Rating';
import Favorite from '../../../components/Favorite';
import CartIcon from '../../../components/CartIcon';
import Button from '../../../components/Button';
import {CartItem} from '../../../resources/interfaces/items/cartItem';
import {ProductItem} from '../../../resources/interfaces/items/productItem';
import {updateCartList} from '../../../utils/cartFuncs';
import {RootState} from '../../../redux/store';
import {connect} from 'react-redux';
const ProductDetails = ({navigation, route, cart}: ProductDetailsProps) => {
  const theme = useTheme();
  const {cartList} = cart;
  const {description, images, name, offerPrice, price, rating, size, id} =
    route?.params.details;
  const [ratingValue, setRatingValue] = useState(rating);
  const [exist, setExist] = useState(
    cartList.findIndex(cartItem => cartItem.id === id) > -1,
  );
  const changeFavoriteList = () => {
    console.log('favorite');
  };
  const updateCart = (item: ProductItem) => {
    const tempItem: CartItem = {
      ...item,
      itemCartId: cartList.length,
      quantity: 1,
    };
    updateCartList(cartList, tempItem, exist).then();
  };
  useEffect(() => {
    setExist(
      cartList.findIndex(cartItem => cartItem.id === route?.params.details.id) >
        -1,
    );
  }, [cartList, route?.params.details.id]);

  return (
    <MainLayout
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
            <Shadow
              distance={2}
              startColor={theme.productDetails.shadowStart}
              endColor={theme.productDetails.shadowEnd}
              offset={[0, 3]}>
              <Ripple
                rippleContainerBorderRadius={getByScreenSize(6, 10)}
                style={[
                  styles.shareRipple,
                  {
                    backgroundColor: theme.productDetails.shareIconBackground,
                  },
                ]}
                onPress={() => console.log('share')}>
                <Icon
                  type={'Entypo'}
                  name={'share'}
                  size={getByScreenSize(theme.text.s6, theme.text.s5)}
                  color={theme.productDetails.shareIcon}
                />
              </Ripple>
            </Shadow>
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
          <Favorite
            isFavorite={false}
            onToggleFavorite={() => changeFavoriteList()}
            style={{
              position: 'absolute',
              left: 20,
              top: 20,
              zIndex: 1,
            }}
          />
          <CartIcon
            isAddedToCart={exist}
            onCartItemsChange={() => updateCart(route?.params?.details)}
            style={{
              position: 'absolute',
              right: 20,
              top: 20,
              zIndex: 1,
            }}
          />
          <AnimatedPaginationDots data={images} />
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
              starStyle={{marginLeft: '2%'}}
              onChange={setRatingValue}
              onPress={() =>
                navigation?.navigate('productReview', {
                  details: route?.params.details,
                })
              }
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Button
            title={tr('productDetails.addToCart')}
            backgroundColor={theme.productDetails.addButtonBackground}
            onPress={() => {}}
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
  // wish: state.wish
});

export default connect(mapStateToProps)(ProductDetails);

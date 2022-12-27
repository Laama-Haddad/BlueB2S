import React from 'react';
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

const ProductDetails = ({navigation, route}: ProductDetailsProps) => {
  const theme = useTheme();
  const {description, images, name, offerPrice, price, rating, size} =
    route?.params.details;
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
                  size={getByScreenSize(theme.text.s8, theme.text.s6)}
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
            onToggleFavorite={() => console.log('add favorite')}
            style={{
              position: 'absolute',
              left: 20,
              top: 20,
            }}
          />
          <CartIcon
            isAddedToCart={true}
            onCartItemsChange={() => console.log('add to cart')}
            style={{
              position: 'absolute',
              right: 20,
              top: 20,
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
              rating={rating}
              starSize={theme.text.s6}
              starStyle={{marginLeft: '2%'}}
            />
          </View>
        </View>
        <View style={styles.bottomContainer} />
      </View>
    </MainLayout>
  );
};
export default ProductDetails;

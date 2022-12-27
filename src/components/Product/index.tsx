import React from 'react';
import {Image, View} from 'react-native';
import {ProductProps} from '../../resources/interfaces/components/product';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {useTheme} from '@react-navigation/native';
import GenericText from '../GenericText';
import {tr} from '../../resources/translations';
import {Shadow} from 'react-native-shadow-2';
import Rating from '../Rating';

const Product = ({details, onPress, containerStyle}: ProductProps) => {
  const theme = useTheme();
  return (
    <Shadow
      distance={6}
      startColor={theme.product.shadowStart}
      endColor={theme.product.shadowEnd}
      offset={[0, 3]}>
      <Ripple
        rippleContainerBorderRadius={4}
        rippleColor={theme.product.ripple}
        style={[
          styles.container,
          {backgroundColor: theme.product.background},
          containerStyle,
        ]}
        onPress={onPress}>
        <View style={styles.leftContainer}>
          <Image
            source={{uri: details.imageUri}}
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
            <GenericText
              style={[
                styles.productSizeText,
                {fontSize: theme.text.s10, color: theme.product.size},
              ]}>
              {details.size}
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
            <Rating rating={details.rating} />
          </View>
        </View>
      </Ripple>
    </Shadow>
  );
};

export default Product;

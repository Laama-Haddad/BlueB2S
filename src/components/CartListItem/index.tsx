import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import {CartItemProps} from '../../resources/interfaces/components/cartListItem';
import {useTheme} from '@react-navigation/native';
import GenericText from '../GenericText';
import {tr} from '../../resources/translations';
import {getByScreenSize} from '../../utils/responsive';

const CartListItem = ({
  productId,
  imageUri,
  title,
  price,
  size,
  selectedQuantity = 1,
  onQuantityChange,
  onDeletePress,
  containerStyle,
}: CartItemProps) => {
  const [quantity, setQuantity] = useState(selectedQuantity);
  const onChange = (val: number) => {
    let newQuantity = quantity + val;
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange({quantity: newQuantity, id: productId});
    }
  };
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: theme.cartItem.containerBorder,
          backgroundColor: theme.cartItem.containerBackground,
        },
        containerStyle,
      ]}>
      <View style={styles.leftContainer}>
        <Image
          source={{uri: imageUri}}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>
      <View style={styles.centerContainer}>
        <GenericText
          style={[
            styles.title,
            {color: theme.cartItem.title, fontSize: theme.text.s8},
          ]}>
          {title} {size}
        </GenericText>
        <GenericText
          style={[
            styles.price,
            {color: theme.cartItem.price, fontSize: theme.text.s8},
          ]}>
          {price} {tr('app.currency')}
        </GenericText>
      </View>
      <View style={styles.rightContainer}>
        <Icon
          name={'trash-outline'}
          type={'Ionicons'}
          role={'button'}
          size={getByScreenSize(theme.text.s6, theme.text.s5)}
          color={theme.cartItem.trash}
          onPress={onDeletePress}
          style={{}}
        />
        <View style={styles.quantityContainer}>
          <Icon
            disabled={quantity === 1}
            type={'FontAwesome'}
            name={'minus'}
            role={'button'}
            color={theme.cartItem.minus}
            style={{backgroundColor: theme.cartItem.minusBackground}}
            size={getByScreenSize(theme.text.s10, theme.text.s9)}
            onPress={() => {
              onChange(-1);
            }}
          />
          <GenericText
            style={[
              styles.quantity,
              {color: theme.cartItem.quantity, fontSize: theme.text.s7},
            ]}>
            {quantity}
          </GenericText>
          <Icon
            type={'FontAwesome'}
            name={'plus'}
            role={'button'}
            color={theme.cartItem.plus}
            style={{backgroundColor: theme.cartItem.plusBackground}}
            size={getByScreenSize(theme.text.s10, theme.text.s9)}
            onPress={() => {
              setQuantity(quantity + 1);
              onChange(+1);
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default CartListItem;

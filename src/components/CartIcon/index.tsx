import React from 'react';
import Ripple from 'react-native-material-ripple';
import Icon from '../Icon';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize} from '../../utils/responsive';
import styles from './styles';
import {Shadow} from 'react-native-shadow-2';
import {CartIconProps} from '../../resources/interfaces/components/cartIcon';

const CartIcon = ({
  size,
  onCartItemsChange,
  isAddedToCart = false,
  style,
}: CartIconProps) => {
  const theme = useTheme();
  const onAddedToCart = () => {
    if (onCartItemsChange) {
      onCartItemsChange();
    }
  };
  return (
    <Shadow
      distance={2}
      startColor={theme.cartIcon.shadowStart}
      endColor={theme.cartIcon.shadowEnd}
      offset={[0, 3]}
      containerStyle={style}>
      <Ripple
        rippleContainerBorderRadius={getByScreenSize(6, 10)}
        style={[
          styles.container,
          {
            backgroundColor: isAddedToCart
              ? theme.cartIcon.addedBackground
              : theme.cartIcon.unAddedBackground,
          },
        ]}
        onPress={onAddedToCart}>
        <Icon
          type={'SVG'}
          name={'cart'}
          size={size ? size : getByScreenSize(theme.text.s8, theme.text.s4)}
          color={
            isAddedToCart
              ? theme.cartIcon.addedCart
              : theme.cartIcon.unAddedCart
          }
        />
      </Ripple>
    </Shadow>
  );
};

export default CartIcon;

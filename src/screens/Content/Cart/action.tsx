import {store} from '../../../redux/store';
import {addToCart} from './reducer';
import {CartItem} from '../../../resources/interfaces/items/cartItem';

export const saveCartList = (cartList: CartItem[]) => {
  store.dispatch(
    addToCart({
      cartList,
    }),
  );
};

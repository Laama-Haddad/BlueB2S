import {setLocalData} from './storage';
import {keys} from '../api/keys';
import {saveCartList} from '../screens/Content/Cart/action';
import {tr} from '../resources/translations';
import {CartItem} from '../resources/interfaces/items/cartItem';
import {showToastAndroid} from './funcs';

export const addItemToCart = (list: CartItem[], newItem: CartItem) => {
  let temp = [...list];
  const idx = temp.findIndex(item => item.id === newItem.id);
  if (idx > -1) {
    temp[idx] = newItem;
  } else {
    temp.push(newItem);
  }
  return temp;
};
export const deleteItemFromCart = (list: CartItem[], id: number) => {
  let temp = [...list];
  const idx = temp.findIndex(item => item.id === id);
  if (idx > -1) {
    temp.splice(idx, 1);
  }
  return temp;
};
export const updateCartList = async (
  cartList: CartItem[],
  item: CartItem,
  inCart: boolean,
  isQuanChange = false,
) => {
  if (!inCart) {
    const newCartList = addItemToCart(cartList, item);
    saveCartList(newCartList);
    if (await setLocalData(keys.CART, newCartList)) {
      !isQuanChange && showToastAndroid(tr('cart.addToCartSuccessMessage'));
    } else {
      !isQuanChange && showToastAndroid(tr('cart.addToCartFailedMessage'));
    }
  } else {
    const newCartList = deleteItemFromCart(cartList, item.id);
    saveCartList(newCartList);
    if (await setLocalData(keys.CART, newCartList)) {
      showToastAndroid(tr('cart.deleteFromCartSuccessMessage'));
    } else {
      showToastAndroid(tr('cart.deleteFromCartFailedMessage'));
    }
  }
};

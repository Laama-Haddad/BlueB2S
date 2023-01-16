import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState} from '../../../resources/interfaces/screens/cart';
import {CartItem} from '../../../resources/interfaces/items/cartItem';

const initialState: CartState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{cartList: CartItem[]}>) => {
      state.cartList = action.payload.cartList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;

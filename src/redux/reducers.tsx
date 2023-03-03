import modalReducer from '../connected-components/Modal/reducer';
import cartReducer from '../screens/Content/Cart/reducer';
import favoriteReducer from '../screens/Content/Favorite/reducer';
import authReducer from '../screens/Auth/SignIn/reducer';
import userReducer from '../screens/Auth/SignUp/reducer';
export default {
  modal: modalReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
  auth: authReducer,
  user: userReducer,
};

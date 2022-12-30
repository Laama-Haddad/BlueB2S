import {Theme} from '@react-navigation/native';
import {colors} from "../../theme/colors";

export interface CustomTheme extends Theme {
  primary: string;
  secondary: string;
  info: string;
  homeBackground: string;
  fonts: {
    regular: string;
    semi_bold: string;
    bold: string;
  };
  text: {
    textPrimary: string;
    dark: string;
    light: string;
    placeholder: string;
    border: string;
    borderFocus: string;
    lightGreen: string;
    grey: string;
    black: string;
    s1: number;
    s2: number;
    s3: number;
    s4: number;
    s5: number;
    s6: number;
    s7: number;
    s8: number;
    s85: number;
    s89: number;
    s9: number;
    s10: number;
    s11: number;
    s12: number;
  };
  icon: {
    background: string;
    icon: string;
    label: string;
  };
  header: {
    background: string;
    title: string;
  };
  searchBar: {
    border: string;
    icon: string;
    background: string;
    placeHolder: string;
    value: string;
  };
  tabs: {
    activeItem: string;
    inActiveItem: string;
    background: string;
  };
  modal: {
    containerBackground: string;
    titleBackground: string;
    title: string;
    messageBackground: string;
    message: string;
    okBackground: string;
    okTitle: string;
    borderColor: string;
  };
  product: {
    background: string;
    name: string;
    size: string;
    price: string;
    offerPrice: string;
    rating: string;
    shadowStart: string;
    shadowEnd: string;
    ripple: string;
  };
  category: {
    background: string;
    name: string;
    shadowStart: string;
    shadowEnd: string;
    ripple: string;
  };
  rating: {
    star: string;
  };
  favorite: {
    favoriteHeart: string;
    unFavoriteHeart: string;
    favoriteBackground: string;
    unFavoriteBackground: string;
    shadowStart: string;
    shadowEnd: string;
  };
  cartIcon: {
    addedCart: string;
    unAddedCart: string;
    addedBackground: string;
    unAddedBackground: string;
    shadowStart: string;
    shadowEnd: string;
  };
  animationPaginationDots: {
    selectedDot: string;
    unSelectedDot: string;
  };
  button: {
    title: string;
  };
  cartItem: {
    containerBackground: string;
    containerBorder: string;
    title: string;
    price: string;
    close: string;
    minus: string;
    plus: string;
    quantityBorder: string;
    quantity: string;
    minusBackground: string;
    shadowStart: string;
    shadowEnd: string;
  };
  home: {
    title: string;
  };
  productDetails: {
    title: string;
    description: string;
    shareIcon: string;
    shareIconBackground: string;
    shadowStart: string;
    shadowEnd: string;
    offerPrice: string;
    price: string;
    addButtonBackground: string;
    buyButtonBackground: string;
  };
  cart: {
    border: string;
    totalPrice: string;
    shoppingBackground: string;
    checkOutBackground: string;
  };
  profile: {
    title: string;
    subTitle: string;
    containerBorder: string;
    imageBorder: string;
    textInputBorder: string;
    category: string;
    label: string;
    text: string;
    icon: string;
    editAccountBackground: string;
    logOutBackground: string;
  };
}

import {Theme} from '@react-navigation/native';

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
  textInput: {
    background: string;
    activeUnderlineColor: string;
    underlineColor: string;
    eyeIcon: string;
    required: string;
  };
  searchBar: {
    border: string;
    icon: string;
    background: string;
    placeHolder: string;
    value: string;
  };
  tabs: {
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
    price: string;
    offerPrice: string;
    rating: string;
  };
  category: {
    border: string;
    name: string;
    ripple: string;
  };
  rating: {
    star: string;
  };
  favorite: {
    favoriteHeart: string;
    unFavoriteHeart: string;
    emptyTitle: string;
    emptyMessage: string;
    heart: string;
  };
  cartIcon: {
    addedCart: string;
    unAddedCart: string;
    background: string;
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
    trash: string;
    minus: string;
    plus: string;
    quantity: string;
    minusBackground: string;
    plusBackground: string;
  };
  favoriteItem: {
    containerBackground: string;
    containerBorder: string;
    title: string;
    price: string;
  };
  orderListItem: {
    containerBackground: string;
    containerBorder: string;
    cancelIconBackground: string;
    checkIconBackground: string;
    shippedIconBackground: string;
    icon: string;
    date: string;
    text: string;
    price: string;
  };
  comment: {
    imageBorder: string;
    title: string;
    text: string;
  };
  circlePaymentMethod: {
    grayContainerBackground: string;
    outlineCircle: string;
    solidCircle: string;
    text: string;
  };
  accordionList: {
    background: string;
    title: string;
    titleIcon: string;
    item: string;
    itemIcon: string;
  };
  signIn: {
    title: string;
    submitBackground: string;
    forgot: string;
    appName: string;
    guest: string;
    back: string;
    error: string;
    loading: string;
  };
  signUp: {
    title: string;
    submitBackground: string;
    already: string;
    back: string;
    error: string;
    loading: string;
  };
  splash: {
    background: string;
    text: string;
  };
  home: {
    title: string;
  };
  productDetails: {
    title: string;
    description: string;
    shareIcon: string;
    shareIconBackground: string;
    offerPrice: string;
    price: string;
    addButtonBackground: string;
    buyButtonBackground: string;
  };
  imageViewer: {
    headerBackground: string;
    backIcon: string;
    backIconBackground: string;
    background: string;
  };
  productReview: {
    containerBorder: string;
    separator: string;
    lightText: string;
    darkText: string;
    emptyStar: string;
  };
  writeReview: {
    text: string;
    placeHolderComment: string;
    grayText: string;
    submitBackground: string;
    containerBorder: string;
    emptyStar: string;
  };
  placeOrder: {
    containerBorder: string;
    lightText: string;
    darkText: string;
    coloredText: string;
    submitBackground: string;
    separator: string;
  };
  cart: {
    border: string;
    totalPrice: string;
    shoppingBackground: string;
    checkOutBackground: string;
    emptyTitle: string;
    emptyMessage: string;
  };
  profile: {
    title: string;
    name: string;
    icon: string;
    backgroundSignIn: string;
  };
  updateProfile: {
    title: string;
    submitBackground: string;
    cameraIcon: string;
    cameraBackground: string;
    cameraBorder: string;
    loading: string;
    modalBackground: string;
    modalIcon: string;
    modalLabel: string;
  };
  privacyPolicy: {
    text: string;
  };
}

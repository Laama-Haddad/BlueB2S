import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from './colors';
import {fontTypes} from '../../utils/enums';
import {CustomTheme} from '../interfaces/theme/customTheme';
import {DefaultTheme} from '@react-navigation/native';

const SCREEN_HEIGHT_REFERENCE = 742;

/**
 * This can be used to create different themes
 * like dark and light. It can be then connected to
 * React context and controlled via a setting flag.
 */

const lightTheme: CustomTheme = {
  ...DefaultTheme,
  primary: colors.primary,
  secondary: colors.secondary,
  info: colors.info,
  homeBackground: '#FFFFFF',
  fonts: {
    regular: fontTypes.regular,
    semi_bold: fontTypes.semi_bold,
    bold: fontTypes.bold,
  },
  text: {
    textPrimary: colors.primary,
    dark: '#212121',
    light: '#FAFAFA',
    placeholder: '#90A4AE',
    border: '#B0BEC5',
    borderFocus: '#BA68C8',
    lightGreen: '#81C784',
    grey: '#9E9E9E',
    black: '#000000',
    s1: RFValue(44, SCREEN_HEIGHT_REFERENCE),
    s2: RFValue(32, SCREEN_HEIGHT_REFERENCE),
    s3: RFValue(28, SCREEN_HEIGHT_REFERENCE),
    s4: RFValue(25, SCREEN_HEIGHT_REFERENCE),
    s5: RFValue(23, SCREEN_HEIGHT_REFERENCE),
    s6: RFValue(20, SCREEN_HEIGHT_REFERENCE),
    s7: RFValue(17, SCREEN_HEIGHT_REFERENCE),
    s8: RFValue(16, SCREEN_HEIGHT_REFERENCE),
    s85: RFValue(15.5, SCREEN_HEIGHT_REFERENCE),
    s89: RFValue(14.2, SCREEN_HEIGHT_REFERENCE),
    s9: RFValue(14, SCREEN_HEIGHT_REFERENCE),
    s10: RFValue(12, SCREEN_HEIGHT_REFERENCE),
    s11: RFValue(10, SCREEN_HEIGHT_REFERENCE),
    s12: RFValue(8, SCREEN_HEIGHT_REFERENCE),
  },
  icon: {
    background: '#FFFFFF',
    icon: colors.primary,
    label: '#212121',
  },
  header: {
    background: colors.primary,
    title: '#FFFFFF',
  },
  textInput: {
    activeUnderlineColor: colors.secondary,
    underlineColor: colors.primary,
    eyeIcon: '#BDBDBD',
    required: '#B71C1C',
  },
  searchBar: {
    border: '#9E9E9E',
    icon: '#9E9E9E',
    background: '#FFFFFF',
    placeHolder: '#90A4AE',
    value: '#212121',
  },
  tabs: {
    inActiveItem: '#212121',
    background: '#FAFAFA',
  },
  modal: {
    containerBackground: '#263238ab',
    titleBackground: colors.primary,
    title: '#FFFFFF',
    messageBackground: '#FFFFFF',
    message: '#212121',
    okTitle: '#FFFFFF',
    okBackground: colors.primary,
    borderColor: '#F5F5F5',
  },
  product: {
    background: '#F5F5F5',
    name: '#212121',
    price: '#00000055',
    offerPrice: colors.primary,
    rating: colors.primary,
  },
  category: {
    border: '#F5F5F5',
    name: '#212121',
    ripple: '#75757540',
  },
  rating: {
    star: colors.primary,
  },
  favorite: {
    favoriteHeart: colors.secondary,
    unFavoriteHeart: '#00000055',
    emptyTitle: '#212121',
    emptyMessage: '#757575',
    heart: colors.secondary,
  },
  cartIcon: {
    addedCart: colors.primary,
    unAddedCart: '#00000055',
    background: '#FFFFFF',
  },
  animationPaginationDots: {
    selectedDot: colors.primary,
    unSelectedDot: '#E0E0E0',
  },
  button: {
    title: '#FFFFFF',
  },
  cartItem: {
    containerBackground: '#FFFFFF',
    containerBorder: '#E0E0E0',
    title: '#212121',
    price: colors.primary,
    trash: '#B71C1C',
    minus: '#FFFFFF',
    plus: '#FFFFFF',
    quantity: colors.secondary,
    minusBackground: colors.secondary,
    plusBackground: colors.secondary,
  },
  favoriteItem: {
    containerBackground: '#FFFFFF',
    containerBorder: '#E0E0E0',
    title: '#212121',
    price: colors.primary,
  },
  orderListItem: {
    containerBackground: '#FFFFFF',
    containerBorder: '#E0E0E0',
    cancelIconBackground: '#B71C1C',
    checkIconBackground: '#69F0AE',
    shippedIconBackground: colors.secondary,
    icon: '#FFFFFF',
    date: '#616161',
    text: '#212121',
    price: colors.primary,
  },
  comment: {
    imageBorder: '#9E9E9E',
    title: '#424242',
    text: '#212121',
  },
  circlePaymentMethod: {
    grayContainerBackground: '#F5F5F5',
    outlineCircle: '#212121',
    solidCircle: colors.primary,
    text: '#212121',
  },
  accordionList: {
    background: '#eeeeee',
    title: '#212121',
    titleIcon: '#212121',
    item: '#424242',
    itemIcon: '#424242',
  },
  signIn: {
    title: '#212121',
    submitBackground: colors.secondary,
    forgot: '#979797',
    appName: colors.primary,
    guest: '#757575',
    back: '#000000',
    error: '#B71C1C',
    loading: '#212121',
  },
  signUp: {
    title: '#212121',
    submitBackground: colors.secondary,
    already: '#616161',
    back: '#212121',
    error: '#B71C1C',
    loading: '#212121',
  },
  splash: {
    background: '#FFFFFF',
    text: colors.secondary,
  },
  home: {
    title: '#212121',
  },
  productDetails: {
    title: '#212121',
    description: '#616161',
    shareIcon: colors.secondary,
    shareIconBackground: '#FFFFFF',
    offerPrice: colors.primary,
    price: '#BDBDBD',
    addButtonBackground: colors.secondary,
    buyButtonBackground: colors.primary,
  },
  imageViewer: {
    headerBackground: '#212121',
    backIcon: '#FFFFFF',
    backIconBackground: '#FFFFFF55',
    background: '#212121',
  },
  productReview: {
    containerBorder: '#E0E0E0',
    separator: '#BDBDBD',
    lightText: '#9E9E9E',
    darkText: '#212121',
    emptyStar: '#212121',
  },
  writeReview: {
    text: '#212121',
    placeHolderComment: '#90A4AE',
    grayText: '#757575',
    submitBackground: colors.primary,
    containerBorder: '#E0E0E0',
    emptyStar: '#212121',
  },
  placeOrder: {
    containerBorder: '#E6E6E6',
    lightText: '#757575',
    darkText: '#212121',
    coloredText: colors.primary,
    submitBackground: colors.primary,
    separator: '#E0E0E0',
  },
  cart: {
    border: '#E0E0E0',
    totalPrice: '#212121',
    shoppingBackground: colors.secondary,
    checkOutBackground: colors.primary,
    emptyTitle: '#212121',
    emptyMessage: '#757575',
  },
  profile: {
    title: '#212121',
    icon: '#212121',
    backgroundSignIn: '#212121',
  },
  updateProfile: {
    title: '#212121',
    submitBackground: colors.primary,
    cameraIcon: '#212121',
    cameraBackground: '#ffffff',
    cameraBorder: '#eeeeee',
    loading: '#212121',
    modalBackground: '#eeeeee',
    modalIcon: '#212121',
    modalLabel: '#212121',
  },
  privacyPolicy: {
    text: '#212121',
  },
};

export default lightTheme;

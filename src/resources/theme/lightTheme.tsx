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
  homeBackground: '#F2F2F2',
  fonts: {
    regular: fontTypes.regular,
    semi_bold: fontTypes.semi_bold,
    bold: fontTypes.bold,
  },
  text: {
    textPrimary: colors.primary,
    dark: '#5B5B5B',
    light: '#FFFFFF',
    placeholder: '#B2AEAE',
    border: '#979797',
    borderFocus: '#80CBC4',
    lightGreen: '#1C6758',
    grey: '#979797',
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
    label: '#000000',
  },
  header: {
    background: '#C500FF',
    title: '#000000',
  },
  searchBar: {
    border: '#979797',
    icon: '#979797',
    background: '#FFFFFF',
    placeHolder: '#B2AEAE',
    value: '#000000',
  },
  tabs: {
    activeItem: 'red',
    inActiveItem: '#000000',
    background: '#F2F2F2',
  },
  modal: {
    containerBackground: '#1C2340ab',
    titleBackground: colors.primary,
    title: '#FFFFFF',
    messageBackground: '#FFFFFF',
    message: '#000000',
    okTitle: '#FFFFFF',
    okBackground: colors.primary,
    borderColor: '#E4E4F1',
  },
  product: {
    background: '#F5F5F5',
    name: '#000000',
    size: '#00000',
    price: '#979797',
    offerPrice: colors.primary,
    rating: '#B80FEA',
    shadowStart: '#44444440',
    shadowEnd: '#eeeeeedd',
    ripple: '#44444440',
  },
};

export default lightTheme;

import {Platform} from 'react-native';

export const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};
export const fontTypes = {
  bold: Platform.OS === 'android' ? 'Myriad Pro Bold' : 'MyriadPro-Bold',
  semi_bold:
    Platform.OS === 'android' ? 'Myriad Pro SemiBold' : 'MyriadPro-SemiBold',
  regular:
    Platform.OS === 'android' ? 'Myriad Pro Regular' : 'MyriadPro-Regular',
};
export const modalTypes = {
  info: 'info',
  question: 'question',
};

export const orderTypes = {
  cancel: 'canceled',
  delivered: 'delivered',
  shipped: 'shipped',
};
export const orderPaymentTypes = {
  paid: 'paid',
  onDelivery: 'on Delivery',
};

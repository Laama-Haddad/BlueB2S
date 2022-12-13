import {Platform} from 'react-native';

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

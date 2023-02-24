import {ToastAndroid} from 'react-native';

export const showToastAndroid = (msg: string) => {
  ToastAndroid.showWithGravityAndOffset(
    msg,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    5,
  );
};

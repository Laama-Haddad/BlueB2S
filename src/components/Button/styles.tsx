import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  ripple: {
    borderRadius: getByScreenSize(6, 10),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: hdp(5),
  },
  title: {
    fontWeight: '700',
  },
});
export default styles;

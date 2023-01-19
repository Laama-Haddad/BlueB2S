import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: getByScreenSize(hdp(79), hdp(75)),
  },
  text: {
    fontWeight: '700',
  },
});
export default styles;

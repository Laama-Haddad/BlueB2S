import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hdp(getByScreenSize(7, 8)),
    width: '100%',
    paddingHorizontal: '3%',
  },
  leftContainer: {
    width: wdp(10),
  },
  centerContainer: {width: wdp(74)},
  rightContainer: {width: wdp(10)},
  title: {
    paddingHorizontal: '2%',
    fontWeight: '700',
  },
});
export default styles;

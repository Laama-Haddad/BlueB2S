import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C500FF',
    height: hdp(13),
    width: '100%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingHorizontal: '3%',
  },
  leftContainer: {
    width: wdp(10),
  },
  rippleIcon: {
    width: wdp(8),
    height: wdp(8),
    borderRadius: wdp(4),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {width: wdp(74)},
  rightContainer: {width: wdp(10)},
  title: {
    fontSize: 22,
    paddingHorizontal: '2%',
  },
});
export default styles;

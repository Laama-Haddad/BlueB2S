import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: hdp(getByScreenSize(15, 16)),
    borderRadius: getByScreenSize(5, 10),
    borderWidth: getByScreenSize(1, 2),
  },
  iconContainer: {
    width: wdp(getByScreenSize(12, 10)),
    height: wdp(getByScreenSize(12, 10)),
    borderRadius: wdp(getByScreenSize(6, 5)),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontWeight: '700',
  },
  description: {
    fontWeight: '600',
  },
  middleContainer: {
    width: wdp(50),
    paddingHorizontal: '3%',
    height: '100%',
    justifyContent: 'space-between',
  },
  rightContainer: {
    paddingHorizontal: '3%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusText: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: '700',
  },
});
export default styles;

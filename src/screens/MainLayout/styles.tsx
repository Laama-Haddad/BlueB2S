import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  mainView: {
    paddingHorizontal: '5%',
    flexGrow: 1,
    height: '100%',
    zIndex: 2,
  },
  mainScrollView: {
    paddingHorizontal: '5%',
    paddingVertical: getByScreenSize(hdp(1.2), hdp(1)),
    height: '100%',
    zIndex: 2,
  },
  spacer: {
    padding: hdp(12),
  },
  bottomSpacer: {
    padding: hdp(7.2),
  },
});
export default styles;

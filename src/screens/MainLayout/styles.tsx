import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  mainView: {
    paddingHorizontal: '5%',
    paddingVertical: getByScreenSize(hdp(1.2), hdp(1)),
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
  imageContainer: {
    position: 'absolute',
    top: getByScreenSize(hdp(2), hdp(2)),
    right: wdp(getByScreenSize(6,5)),
  },
  image: {
    width: wdp(getByScreenSize(20,16)),
    height: wdp(getByScreenSize(20,16)),
    borderRadius: wdp(getByScreenSize(10,8)),
    borderWidth: 3,
  },
});
export default styles;

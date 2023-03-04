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
    top: getByScreenSize(hdp(5), hdp(4)),
    right: wdp(9),
  },
  image: {
    width: wdp(20),
    height: wdp(20),
    borderRadius: wdp(10),
    borderWidth: 3,
  },
});
export default styles;

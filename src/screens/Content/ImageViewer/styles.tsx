import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: wdp(100),
    height: hdp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  backIcon: {
    position: 'absolute',
    top: hdp(5),
    left: wdp(3),
    opacity: 0.4,
    zIndex: 1,
  },
});
export default styles;

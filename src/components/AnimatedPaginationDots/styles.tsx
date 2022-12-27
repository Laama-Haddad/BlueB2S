import {StyleSheet} from 'react-native';
import {hdp, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hdp(40),
  },
  PagerView: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  image: {
    width: wdp(30),
    height: '90%',
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../utils/responsive';

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
    borderRadius: getByScreenSize(4, 8),
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: getByScreenSize(4, 8),
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default styles;

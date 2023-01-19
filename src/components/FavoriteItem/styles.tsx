import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: getByScreenSize(hdp(15), hdp(15)),
    borderRadius: getByScreenSize(5, 5),
    flexDirection: 'row',
    borderWidth: getByScreenSize(1, 2),
  },
  imageContainer: {
    width: wdp(20),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '90%',
    width: '80%',
  },
  middleContainer: {
    height: '100%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  text: {
    fontWeight: '700',
  },
  favorite: {
    position: 'absolute',
    right: 10,
    top: 5,
    width: getByScreenSize(28, 50),
    height: getByScreenSize(28, 50),
  },
  cart: {
    width: getByScreenSize(28, 50),
    height: getByScreenSize(28, 50),
    position: 'absolute',
    right: 10,
    bottom: 12,
  },
});
export default styles;

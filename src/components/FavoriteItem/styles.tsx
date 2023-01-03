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
  image: {
    width: wdp(20),
    height: '90%',
    borderWidth: 1,
  },
  middleContainer: {
    height: '100%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '700',
  },
  favorite: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  cart: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
export default styles;

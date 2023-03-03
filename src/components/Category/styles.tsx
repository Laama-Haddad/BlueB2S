import {StyleSheet} from 'react-native';
import {getByScreenSize, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wdp(32),
    width: wdp(38),
    borderRadius: getByScreenSize(4, 8),
  },
  imageContainer: {
    height: wdp(25),
    width: wdp(42),
    borderRadius: getByScreenSize(4, 8),
  },
  image: {
    height: wdp(25),
    width: wdp(42),
    borderRadius: getByScreenSize(4, 8),
  },
  categoryNameText: {
    fontWeight: '400',
    marginVertical: '2%',
    textTransform: 'uppercase',
  },
});
export default styles;

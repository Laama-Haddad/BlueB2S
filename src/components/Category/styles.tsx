import {StyleSheet} from 'react-native';
import {wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wdp(34),
    width: wdp(42),
    borderRadius: 4,
  },
  imageContainer: {
    height: wdp(25),
    width: wdp(42),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryNameText: {
    fontWeight: '400',
    marginVertical: '2%',
    textTransform: 'uppercase',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wdp(32),
    width: wdp(38),
    borderRadius: 4,
  },
  imageContainer: {
    height: wdp(25),
    width: wdp(42),
  },
  image: {
    height: wdp(25),
    width: wdp(42),
  },
  categoryNameText: {
    fontWeight: '400',
    marginVertical: '2%',
    textTransform: 'uppercase',
  },
});
export default styles;

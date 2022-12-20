import {StyleSheet} from 'react-native';
import {wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wdp(44),
    width: wdp(44),
    borderRadius: 4,
    padding: '3%',
  },
  imageContainer: {
    height: wdp(25),
    width: wdp(44),
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

import {StyleSheet} from 'react-native';
import {getByScreenSize, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getByScreenSize(4, 8),
  },
  imageContainer: {
    borderRadius: getByScreenSize(4, 8),
    borderWidth: getByScreenSize(1,2),borderColor:'grey'
  },
  image: {
    height: wdp(23),
    width: wdp(42),
    borderRadius: getByScreenSize(4, 8),
  },
  categoryNameText: {
    fontWeight: '700',
    marginVertical: '1%',
    textTransform: 'uppercase',
  },
});
export default styles;

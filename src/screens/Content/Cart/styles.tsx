import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  totalPriceContainer: {
    borderWidth: getByScreenSize(1, 2),
    height: hdp(7),
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginVertical: '5%',
  },
  totalPrice: {
    fontWeight: '700',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: hdp(15),
  },
});
export default styles;

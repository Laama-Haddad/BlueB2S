import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getByScreenSize(hdp(79), hdp(75)),
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
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    fontWeight: '700',
  },
});
export default styles;

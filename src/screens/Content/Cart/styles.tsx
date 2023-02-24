import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getByScreenSize(hdp(79), hdp(75)),
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hdp(20),
    paddingTop: '15%',
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
    width: '100%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    marginTop: '15%',
    fontWeight: '700',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp, wdp} from '../../utils/responsive';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: hdp(15),
    borderRadius: getByScreenSize(5, 10),
    borderWidth: 1,
  },
  leftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  image: {
    height: '90%',
    width: '70%',
  },
  centerContainer: {},
  priceContainer: {},
  title: {
    fontWeight: '700',
  },
  price: {
    fontWeight: '700',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: getByScreenSize(wdp(3), 16),
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '85%',
    paddingVertical: '3%',
    paddingHorizontal: '2%',
    position: 'absolute',
    right: '2%',
  },
  circle: {
    width: getByScreenSize(wdp(6.5), wdp(6.5)),
    height: getByScreenSize(wdp(6.5), wdp(6.5)),
    borderRadius: getByScreenSize(wdp(2), wdp(2)),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.6,
  },
  quantity: {
    fontWeight: '700',
    paddingHorizontal: getByScreenSize(wdp(2), wdp(3)),
  },
});
export default styles;

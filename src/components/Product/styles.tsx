import {StyleSheet} from 'react-native';
import {getByScreenSize, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wdp(getByScreenSize(36, 30)),
    width: wdp(getByScreenSize(36, 30)),
    borderRadius: getByScreenSize(4, 8),
    flexDirection: 'row',
    padding: '5%',
  },
  leftContainer: {
    width: '40%',
    height: '100%',
  },
  rightContainer: {
    width: '60%',
    height: '100%',
    marginLeft: '7%',
    justifyContent: 'space-between',
    paddingVertical: '2%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topRightContainer: {
    height: '30%',
  },
  bottomRightContainer: {
    height: '50%',
  },
  productNameText: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  productPriceText: {
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginVertical: '2%',
  },
  productOfferPriceText: {
    fontWeight: '600',
  },
  cart: {
    width: getByScreenSize(28, 50),
    height: getByScreenSize(28, 50),
    position: 'absolute',
    right: getByScreenSize(1,3),
    bottom: -getByScreenSize(7,10),
  },
});
export default styles;

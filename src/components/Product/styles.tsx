import {StyleSheet} from 'react-native';
import {wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wdp(40),
    width: wdp(40),
    borderRadius: 4,
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
    marginLeft: '2%',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topRightContainer: {
    height: '30%',
  },
  bottomRightContainer: {
    height: '45%',
    justifyContent: 'center',
  },
  productNameText: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  productSizeText: {
    fontWeight: '600',
  },
  productPriceText: {
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginVertical: '2%',
    marginLeft: '10%',
  },
  productOfferPriceText: {
    fontWeight: '600',
    marginLeft: '10%',
  },
});
export default styles;

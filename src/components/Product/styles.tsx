import {StyleSheet} from 'react-native';
import {wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: wdp(44),
    width: wdp(44),
    borderRadius: 4,
    flexDirection: 'row',
    padding: '3%',
  },
  leftContainer: {
    width: '40%',
    height: '100%',
  },
  rightContainer: {
    width: '60%',
    height: '100%',
    paddingLeft: '10%',
    justifyContent: 'space-between',
    paddingVertical: '2%',
  },
  image: {
    width: '100%',
    height: '100%',
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
  },
  productOfferPriceText: {
    fontWeight: '600',
  },
});
export default styles;

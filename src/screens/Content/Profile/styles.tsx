import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getByScreenSize(hdp(79), hdp(75)),
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontWeight: '700',
  },
  subTitle: {
    fontWeight: '700',
  },

  category: {
    fontWeight: '700',
    marginVertical: getByScreenSize(hdp(2), hdp(1)),
  },
  detailsContainer: {
    borderWidth: getByScreenSize(1, 2),
    borderRadius: 5,
    paddingBottom: '3%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    height: hdp(4),
  },
  label: {
    fontWeight: '600',
    width: wdp(17),
    marginTop: '3%',
  },
  text: {
    fontWeight: '400',
    marginLeft: '5%',
  },
});
export default styles;

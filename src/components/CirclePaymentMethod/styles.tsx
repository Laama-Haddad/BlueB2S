import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlineCircle: {
    borderWidth: getByScreenSize(2, 3),
    width: getByScreenSize(20, 36),
    height: getByScreenSize(20, 36),
    borderRadius: getByScreenSize(10, 18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  solidCircle: {
    width: getByScreenSize(12, 22),
    height: getByScreenSize(12, 22),
    borderRadius: getByScreenSize(6, 11),
  },
  radioText: {
    fontWeight: '700',
    borderRadius: 6,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginHorizontal: '5%',
    marginVertical: '1%',
  },
});
export default styles;

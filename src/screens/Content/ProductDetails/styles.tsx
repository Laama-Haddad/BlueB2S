import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingVertical: '3%',
  },
  topContainer: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4%',
  },
  title: {
    fontWeight: '600',
  },
  shareRipple: {
    justifyContent: 'center',
    alignItems: 'center',
    width: getByScreenSize(30, 40),
    height: getByScreenSize(30, 40),
    borderRadius: getByScreenSize(6, 10),
  },
  description: {},
  centerContainer: {},
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%',
    paddingLeft: '5%',
  },
  bottomContainer: {},
});
export default styles;

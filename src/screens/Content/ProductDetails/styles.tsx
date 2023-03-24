import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hdp(getByScreenSize(89, 88)),
  },
  topContainer: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4%',
  },
  title: {},
  shareRipple: {
    justifyContent: 'center',
    alignItems: 'center',
    width: getByScreenSize(32, 50),
    height: getByScreenSize(32, 50),
    borderRadius: getByScreenSize(6, 10),
  },
  description: {},
  centerContainer: {
    marginTop: '4%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '2%',
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: '2%',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: '3%',
  },
});
export default styles;

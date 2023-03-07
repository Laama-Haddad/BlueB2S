import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    height: hdp(getByScreenSize(27, 30)),
    borderBottomWidth: getByScreenSize(1, 2),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  titleContainer: {
    borderWidth: getByScreenSize(1, 2),
    paddingVertical: '5%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: hdp(getByScreenSize(17, 20)),
    width: '100%',
    marginBottom: '3%',
  },
  title: {
    fontWeight: '700',
  },
});
export default styles;

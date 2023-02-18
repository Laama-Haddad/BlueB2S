import {StyleSheet} from 'react-native';
import {hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hdp(20),
    paddingTop: '15%',
  },
  emptyContainer: {
    alignItems: 'center',
    width: '100%',
  },
  text: {
    marginTop: '15%',
    fontWeight: '700',
  },
});
export default styles;

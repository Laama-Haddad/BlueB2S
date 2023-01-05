import {StyleSheet} from 'react-native';
import {wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
  },
  text: {
    fontWeight: '700',
    paddingLeft: '2%',
  },
  image: {
    width: wdp(16),
    height: wdp(16),
    borderRadius: wdp(8),
    borderWidth: 3,
  },
});
export default styles;

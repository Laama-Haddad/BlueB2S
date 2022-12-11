import {StyleSheet} from 'react-native';
import {wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  center: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ripple: {
    width: wdp(8),
    height: wdp(8),
    borderRadius: wdp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: '5%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
export default styles;

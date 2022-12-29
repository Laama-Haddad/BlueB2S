import {StyleSheet} from 'react-native';
import {getByScreenSize, wdp} from '../../utils/responsive';

const styles = StyleSheet.create({
  center: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ripple: {
    width: wdp(5),
    height: wdp(5),
    borderRadius: wdp(2.5),
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

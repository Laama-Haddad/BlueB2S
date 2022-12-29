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
    width: getByScreenSize(wdp(5), wdp(8)),
    height: getByScreenSize(wdp(5), wdp(8)),
    borderRadius: getByScreenSize(wdp(2.5), wdp(4)),
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

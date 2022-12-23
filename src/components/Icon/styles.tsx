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
    width: getByScreenSize(wdp(8), wdp(6)),
    height: getByScreenSize(wdp(8), wdp(6)),
    borderRadius: getByScreenSize(wdp(4), wdp(3)),
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

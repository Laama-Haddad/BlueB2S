import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
const styles = StyleSheet.create({
  container: {
    height: getByScreenSize(hdp(83), hdp(79)),
  },
  topContainer: {paddingHorizontal: '8%', alignItems: 'center'},
  image: {
    width: wdp(30),
    height: wdp(30),
    borderRadius: wdp(15),
    borderWidth: 3,
    marginVertical: '5%',
  },
  cameraIcon: {
    borderWidth: getByScreenSize(1, 2),
    position: 'absolute',
    bottom: wdp(8),
    right: wdp(29),
  },
  title: {
    fontWeight: '700',
    marginVertical: '2%',
    textAlign: 'left',
    width: '100%',
  },
  bottomContainer: {
    marginTop: '5%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hdp(12),
    justifyContent: 'space-between',
  },
});
export default styles;

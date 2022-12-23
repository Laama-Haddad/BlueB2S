import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: getByScreenSize(30, 40),
    height: getByScreenSize(30, 40),
    borderRadius: getByScreenSize(6, 10),
  },
});
export default styles;

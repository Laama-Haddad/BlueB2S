import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: getByScreenSize(32, 50),
    height: getByScreenSize(32, 50),
    borderRadius: getByScreenSize(16, 25),
  },
});
export default styles;

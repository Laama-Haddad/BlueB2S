import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: getByScreenSize(35, 55),
    width: '100%',
    borderRadius: 25,
    borderWidth: getByScreenSize(1, 2),
  },
  textInput: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    left: getByScreenSize(11, 16),
    top: getByScreenSize(6, 10),
  },
});
export default styles;

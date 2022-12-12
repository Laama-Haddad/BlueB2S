import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: getByScreenSize(30, 45),
    width: '100%',
    borderRadius: 25,
    borderWidth: 1,
  },
  textInput: {},
  icon: {
    position: 'absolute',
    left: getByScreenSize(7, 16),
    top: getByScreenSize(5, 8),
  },
});
export default styles;

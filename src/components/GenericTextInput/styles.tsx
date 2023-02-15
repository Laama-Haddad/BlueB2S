import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';

const styles = StyleSheet.create({
  textInput: {
    height: getByScreenSize(55, 68),
    paddingHorizontal: getByScreenSize(25, 30),
  },
});
export default styles;

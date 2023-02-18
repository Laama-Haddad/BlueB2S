import {StyleSheet} from 'react-native';
import {hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hdp(20),
    paddingTop: '15%',
  },
  passwordTextInput: {
    marginTop: '4%',
    marginBottom: '7%',
  },
  forgot: {
    marginTop: '7%',
    marginBottom: '15%',
    width: '100%',
    textAlign: 'center',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: hdp(25),
    paddingVertical: '5%',
  },
  title: {
    fontWeight: '700',
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
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: hdp(12),
    paddingVertical: '4%',
  },
});
export default styles;

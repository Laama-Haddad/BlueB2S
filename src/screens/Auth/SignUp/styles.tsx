import {StyleSheet} from 'react-native';
import {hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hdp(22),
    paddingTop: '15%',
    paddingBottom: '2%',
  },
  title: {
    fontWeight: '700',
  },
  textInput: {
    marginTop: '4%',
  },
  forgot: {
    marginTop: '7%',
    marginBottom: '15%',
    width: '100%',
    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: '7%',
    paddingHorizontal: '5%',
  },
});
export default styles;

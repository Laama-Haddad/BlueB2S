import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hdp(getByScreenSize(85.7, 82)),
    alignItems: 'center',
  },
  ratingContainer: {
    borderWidth: getByScreenSize(1, 2),
    paddingVertical: '7%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hdp(getByScreenSize(14, 16)),
    width: '100%',
    marginTop: '6%',
    marginBottom: '8%',
  },
  title: {
    fontWeight: '700',
    marginTop: '5%',
    marginBottom: '8%',
  },
  description: {
    marginVertical: '2%',
  },
  textInput: {
    height: hdp(15),
    width: '100%',
    borderWidth: getByScreenSize(1, 2),
    borderRadius: 5,
    marginTop: '2%',
    marginBottom: '1%',
    textAlignVertical: 'top',
    paddingHorizontal: '3%',
  },
  charsNum: {
    width: '100%',
    textAlign: 'right',
  },
  submit: {
    position: 'absolute',
    bottom: 20,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {getByScreenSize} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  modalView: {
    borderRadius: 7,
    width: '90%',
  },
  questionModalView: {
    borderRadius: 7,
    width: '90%',
    paddingTop: '7%',
  },
  titleView: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
  },
  messageView: {
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '5%',
  },
  message: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getByScreenSize(20, 25),
    width: '50%',
    height: getByScreenSize(40, 55),
    marginTop: '3%',
  },
  ok: {
    fontWeight: 'bold',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '4%',
  },
  button: {
    width: '50%',
    padding: '2%',
    borderTopWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: '7%',
    fontWeight: 'bold',
  },
});
export default styles;

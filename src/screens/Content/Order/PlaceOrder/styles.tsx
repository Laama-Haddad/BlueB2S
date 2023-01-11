import {StyleSheet} from 'react-native';
import {getByScreenSize, hdp} from '../../../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hdp(getByScreenSize(85.7, 82)),
  },
  categoryContainer: {
    borderWidth: getByScreenSize(1, 2),
    borderRadius: 5,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginTop: '5%',
    width: '100%',
    justifyContent:'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '2%',
  },
  separator: {
    borderWidth: getByScreenSize(1, 2),
    marginTop: '2%',
  },
  policyTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  submit: {
    position: 'absolute',
    bottom: 20,
  },
  text: {
    fontWeight: '700',
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlineCircle: {
    borderWidth: getByScreenSize(2, 3),
    width: getByScreenSize(20, 36),
    height: getByScreenSize(20, 36),
    borderRadius: getByScreenSize(10, 18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  solidCircle: {
    width: getByScreenSize(12, 22),
    height: getByScreenSize(12, 22),
    borderRadius: getByScreenSize(6, 11),
  },
  radioText: {
    fontWeight: '700',
    borderRadius: 6,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginHorizontal: '5%',
    marginVertical: '1%',
  },
});

export default styles;

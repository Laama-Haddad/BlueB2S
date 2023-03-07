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
    marginTop: '2%',
    width: '100%',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '2%',
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
    bottom: 0,
  },
  text: {
    fontWeight: '700',
  },
});

export default styles;

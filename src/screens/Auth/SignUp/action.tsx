import {store} from '../../../redux/store';
import {setUser} from './reducer';
import {UserState} from '../../../resources/interfaces/screens/signUp';

export const setUserStatus = ({personalInfo}: UserState) => {
  store.dispatch(
    setUser({
      personalInfo,
    }),
  );
};

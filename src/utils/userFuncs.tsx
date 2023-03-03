import {setLocalData} from './storage';
import {keys} from '../api/keys';
import {UserState} from '../resources/interfaces/screens/signUp';
import {setUserStatus} from '../screens/Auth/SignUp/action';

export const SaveUser = async (user: UserState) => {
  if (user) {
    setUserStatus(user);
    await setLocalData(keys.USER, user);
  }
};

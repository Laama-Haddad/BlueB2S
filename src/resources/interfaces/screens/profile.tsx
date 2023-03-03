import {NavigationProp} from '@react-navigation/native';
import {AuthState} from './signIn';
import {UserState} from './signUp';

export interface ProfileProps {
  navigation?: NavigationProp<any>;
  auth: AuthState;
  user: UserState;
}

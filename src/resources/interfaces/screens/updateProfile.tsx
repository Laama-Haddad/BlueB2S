import {NavigationProp} from '@react-navigation/native';
import {UserState} from './signUp';

export interface UpdateProfileProps {
  navigation?: NavigationProp<any>;
  user: UserState;
}

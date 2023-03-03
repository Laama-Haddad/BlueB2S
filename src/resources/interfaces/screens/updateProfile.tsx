import {NavigationProp} from '@react-navigation/native';
import {AuthState} from './signIn';

export interface UpdateProfileProps {
  navigation?: NavigationProp<any>;
  auth: AuthState;
}

import {NavigationProp} from '@react-navigation/native';
import {PersonalInformation} from '../items/userItem';

export interface UserState {
  personalInfo: PersonalInformation;
}

export interface SignUpProps {
  navigation?: NavigationProp<any>;
  user: UserState;
}

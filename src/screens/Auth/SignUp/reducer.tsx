import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../../resources/interfaces/screens/signUp';
import {PersonalInformation} from '../../../resources/interfaces/items/userItem';

const initialState: UserState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    profileImage: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{personalInfo: PersonalInformation}>,
    ) => {
      state.personalInfo = action.payload.personalInfo;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser} = userSlice.actions;

export default userSlice.reducer;

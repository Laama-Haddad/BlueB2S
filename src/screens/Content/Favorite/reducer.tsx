import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FavoriteState} from '../../../resources/interfaces/screens/favorite';

const initialState: FavoriteState = {
  favoriteList: [],
};
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavoriteList: (
      state,
      action: PayloadAction<{favoriteList: number[]}>,
    ) => {
      state.favoriteList = action.payload.favoriteList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToFavoriteList} = favoriteSlice.actions;

export default favoriteSlice.reducer;

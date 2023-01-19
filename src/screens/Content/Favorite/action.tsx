import {store} from '../../../redux/store';
import {addToFavoriteList} from './reducer';

export const saveFavoriteList = (favoriteList: number[]) => {
  store.dispatch(
    addToFavoriteList({
      favoriteList,
    }),
  );
};

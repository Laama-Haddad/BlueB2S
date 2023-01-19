import {saveFavoriteList} from '../screens/Content/Favorite/action';
import {setLocalData} from './storage';
import {keys} from '../api/keys';
import {showToastAndroid} from './funcs';
import {tr} from '../resources/translations';

export const addItemToFavoriteList = (list: number[], itemId: number) => {
  let temp = [...list];
  const idx = temp.findIndex(id => id === itemId);
  if (idx === -1) {
    temp.push(itemId);
  }
  return temp;
};
export const deleteItemFromFavoriteList = (list: number[], itemId: number) => {
  let temp = [...list];
  const idx = temp.findIndex(id => id === itemId);
  if (idx > -1) {
    temp.splice(idx, 1);
  }
  return temp;
};
export const updateFavoriteList = async (
  favoriteList: number[],
  itemId: number,
  isFavorite: boolean,
) => {
  if (isFavorite) {
    const newWishList = addItemToFavoriteList(favoriteList, itemId);
    saveFavoriteList(newWishList);
    if (await setLocalData(keys.FAVORITE, newWishList)) {
      showToastAndroid(tr('favorite.addToFavoriteSuccessMessage'));
    } else {
      showToastAndroid(tr('favorite.addToFavoriteFailedMessage'));
    }
  } else {
    const newWishList = deleteItemFromFavoriteList(favoriteList, itemId);
    saveFavoriteList(newWishList);
    if (await setLocalData(keys.FAVORITE, newWishList)) {
      showToastAndroid(tr('favorite.deleteFromFavoriteSuccessMessage'));
    } else {
      showToastAndroid(tr('favorite.deleteFromFavoriteFailedMessage'));
    }
  }
};

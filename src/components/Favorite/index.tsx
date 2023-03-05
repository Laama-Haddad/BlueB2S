import React from 'react';
import Ripple from 'react-native-material-ripple';
import Icon from '../Icon';
import {FavoriteProps} from '../../resources/interfaces/components/favorite';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize} from '../../utils/responsive';
import styles from './styles';

const Favorite = ({
  size,
  onToggleFavorite,
  isFavorite = false,
  style,
}: FavoriteProps) => {
  const theme = useTheme();
  const onFavoriteChange = () => {
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };
  return (
    <Ripple
      rippleContainerBorderRadius={getByScreenSize(6, 10)}
      style={[styles.container, style]}
      onPress={onFavoriteChange}>
      <Icon
        name={'heart'}
        type="AntDesign"
        size={size ? size : getByScreenSize(theme.text.s6, theme.text.s5)}
        color={
          isFavorite
            ? theme.favorite.favoriteHeart
            : theme.favorite.unFavoriteHeart
        }
      />
    </Ripple>
  );
};

export default Favorite;

import React from 'react';
import Ripple from 'react-native-material-ripple';
import Icon from '../Icon';
import {FavoriteProps} from '../../resources/interfaces/components/favorite';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize} from '../../utils/responsive';
import styles from './styles';
import {Shadow} from 'react-native-shadow-2';

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
    <Shadow
      distance={2}
      startColor={theme.favorite.shadowStart}
      endColor={theme.favorite.shadowEnd}
      offset={[0, 3]}
      containerStyle={style}>
      <Ripple
        rippleContainerBorderRadius={getByScreenSize(6, 10)}
        style={[
          styles.container,
          {
            backgroundColor: isFavorite
              ? theme.favorite.favoriteBackground
              : theme.favorite.unFavoriteBackground,
          },
        ]}
        onPress={onFavoriteChange}>
        <Icon
          name="hearto"
          type="AntDesign"
          size={size ? size : getByScreenSize(theme.text.s6, theme.text.s5)}
          color={
            isFavorite
              ? theme.favorite.favoriteHeart
              : theme.favorite.unFavoriteHeart
          }
        />
      </Ripple>
    </Shadow>
  );
};

export default Favorite;

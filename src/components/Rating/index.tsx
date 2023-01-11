import React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {useTheme} from '@react-navigation/native';
import {RatingProps} from '../../resources/interfaces/components/rating';
import {TouchableOpacity} from 'react-native';

const Rating = ({
  rating = 0,
  onChange,
  maxStars = 5,
  starSize,
  emptyStarColor,
  fullStarColor,
  starStyle,
  containerStyle,
  enableHalfStar = true,
  enableSwiping = true,
  onRatingStart,
  onRatingEnd,
  onPress,
}: RatingProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <StarRating
        rating={rating}
        onChange={() => onChange}
        maxStars={maxStars}
        starSize={starSize ? starSize : theme.text.s9}
        color={fullStarColor ? fullStarColor : theme.rating.star}
        emptyColor={emptyStarColor ? emptyStarColor : theme.rating.star}
        style={containerStyle}
        starStyle={[{marginHorizontal: 0}, starStyle]}
        enableHalfStar={enableHalfStar}
        enableSwiping={enableSwiping}
        onRatingStart={() => onRatingStart}
        onRatingEnd={() => onRatingEnd}
      />
    </TouchableOpacity>
  );
};
export default Rating;

import React from 'react';
import StarRating from 'react-native-star-rating-widget';
import {useTheme} from '@react-navigation/native';
import {RatingProps} from '../../resources/interfaces/components/rating';

const Rating = ({
  rating,
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
}: RatingProps) => {
  const theme = useTheme();
  return (
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
  );
};
export default Rating;

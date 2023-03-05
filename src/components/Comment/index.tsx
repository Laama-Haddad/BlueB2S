import {Image, View} from 'react-native';
import styles from './styles';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import GenericText from '../GenericText';
import Rating from '../Rating';
import {CommentProps} from '../../resources/interfaces/components/commentProps';

const Comment = ({
  ownerName,
  ownerImage,
  rating,
  time,
  comment,
  containerStyle,
}: CommentProps) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.topContainer}>
        <Image
          source={
            ownerImage
              ? {uri: ownerImage.uri}
              : {
                  uri: 'https://i.postimg.cc/tT700h6t/download.png',
                }
          }
          resizeMode={'contain'}
          style={[styles.image, {borderColor: theme.comment.imageBorder}]}
        />
        <View style={{marginLeft: '5%'}}>
          <GenericText
            style={[
              styles.text,
              {fontSize: theme.text.s7, color: theme.comment.title},
            ]}>
            {ownerName}
          </GenericText>
          <View style={styles.topContainer}>
            <Rating
              rating={rating}
              starSize={theme.text.s6}
              containerStyle={{}}
            />
            <GenericText
              style={[
                styles.text,
                {fontSize: theme.text.s7, color: theme.comment.title},
              ]}>
              {rating}
            </GenericText>
          </View>
        </View>
        <GenericText
          style={[
            styles.text,
            {
              fontSize: theme.text.s9,
              color: theme.comment.title,
              position: 'absolute',
              right: 0,
            },
          ]}>
          {time}
        </GenericText>
      </View>
      <GenericText style={{fontSize: theme.text.s9, color: theme.comment.text}}>
        {comment}
      </GenericText>
    </View>
  );
};
export default Comment;

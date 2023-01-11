import React, {useState} from 'react';
import MainLayout from '../../MainLayout';
import {tr} from '../../../resources/translations';
import {WriteReviewProps} from '../../../resources/interfaces/screens/writeReview';
import GenericText from '../../../components/GenericText';
import Product from '../../../components/Product';
import styles from './styles';
import {TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Rating from '../../../components/Rating';
import Button from '../../../components/Button';
import {getByScreenSize} from '../../../utils/responsive';

const maxLength = 300;
const WriteReview = ({navigation, route}: WriteReviewProps) => {
  const theme = useTheme();
  const [charsNum, setCharsNum] = useState(maxLength);
  const [comment, setComment] = useState('');
  const onChangeText = (text, callBack) => {
    setComment(text);
    console.log(charsNum, 'before');
    callBack();
  };
  return (
    <MainLayout
      showLogo={false}
      backHeader
      onBackIconPress={() => navigation?.goBack()}
      title={tr('writeReview.headerTitle')}
      keyboardAvoidScrollView>
      <View style={styles.container}>
        <GenericText
          style={[
            styles.title,
            {
              fontSize: theme.text.s6,
              color: theme.writeReview.text,
            },
          ]}>
          {tr('writeReview.title')}
        </GenericText>
        <Product details={route?.params.details} />
        <View
          style={[
            styles.ratingContainer,
            {borderColor: theme.writeReview.containerBorder},
          ]}>
          <GenericText
            style={{
              fontSize: getByScreenSize(theme.text.s9, theme.text.s8),
              color: theme.writeReview.text,
            }}>
            {tr('writeReview.yourRating')}
          </GenericText>
          <Rating
            rating={route?.params?.details?.rating}
            starSize={theme.text.s5}
            emptyStarColor={theme.writeReview.emptyStar}
          />
        </View>
        <GenericText
          style={{
            width: '100%',
            fontSize: theme.text.s9,
            color: theme.writeReview.text,
          }}>
          {tr('writeReview.write')}
        </GenericText>
        <TextInput
          multiline
          onChange={text => {
            onChangeText(text, () => {
              let temp = maxLength - comment.length;
              setCharsNum(temp);
              console.log(charsNum, 'after');
            });
          }}
          value={comment}
          maxLength={maxLength}
          placeholderTextColor={theme.writeReview.placeHolderComment}
          placeholder={tr('writeReview.placeHolderComment')}
          style={[
            styles.textInput,
            {borderColor: theme.writeReview.containerBorder},
          ]}
        />
        <GenericText
          style={{
            width: '100%',
            textAlign: 'right',
            fontSize: theme.text.s11,
            color: theme.writeReview.grayText,
          }}>
          {charsNum} {tr('writeReview.characters')}
        </GenericText>
        <Button
          title={tr('writeReview.submit')}
          backgroundColor={theme.writeReview.submitBackground}
          onPress={() => navigation?.goBack()}
          containerStyle={styles.submit}
        />
      </View>
    </MainLayout>
  );
};
export default WriteReview;

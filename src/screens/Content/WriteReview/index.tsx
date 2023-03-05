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
import {getByScreenSize, wdp} from '../../../utils/responsive';
import {useSelector} from 'react-redux';
import {showToastAndroid} from '../../../utils/funcs';

const maxLength = 300;
const WriteReview = ({navigation, route}: WriteReviewProps) => {
  const theme = useTheme();
  const [charsNum, setCharsNum] = useState(maxLength);
  const [comment, setComment] = useState('');
  const [yourRating, setYourRating] = useState(0);
  const {logged} = useSelector(state => state.auth);
  const handleLength = () => {
    setCharsNum(maxLength - comment.length);
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
        <Product
          details={route?.params.details}
          containerStyle={{
            height: wdp(getByScreenSize(45, 35)),
            width: wdp(getByScreenSize(45, 35)),
            borderRadius: getByScreenSize(4, 8),
          }}
        />
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
            rating={yourRating}
            starSize={theme.text.s5}
            emptyStarColor={theme.writeReview.emptyStar}
            // onChange={setYourRating}
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
          onChangeText={text => {
            setComment(text);
            handleLength();
          }}
          onEndEditing={() => handleLength()}
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
          {charsNum * 1} {tr('writeReview.characters')}
        </GenericText>
        <Button
          title={tr('writeReview.submit')}
          backgroundColor={theme.writeReview.submitBackground}
          onPress={() =>
            logged
              ? navigation?.goBack()
              : showToastAndroid(tr('writeReview.message'))
          }
          containerStyle={styles.submit}
        />
      </View>
    </MainLayout>
  );
};
export default WriteReview;

import React from 'react';
import MainLayout from '../../MainLayout';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {tr} from '../../../resources/translations';
import styles from './styles';
import GenericText from '../../../components/GenericText';
import {useTheme} from '@react-navigation/native';
import {comments} from '../../../resources/staticData/comments';
import {hdp} from '../../../utils/responsive';
import Comment from '../../../components/Comment';
import Rating from '../../../components/Rating';
import {ProductPreviewProps} from '../../../resources/interfaces/screens/productPreview';

const ProductReview = ({navigation, route}: ProductPreviewProps) => {
  const {rating} = route?.params?.details;
  const theme = useTheme();
  const renderItem = ({item}) => {
    return (
      <Comment
        id={item.id}
        ownerName={item.ownerName}
        ownerImage={item.ownerImage}
        comment={item.comment}
        rating={item.rating}
        time={item.time}
        productId={item.productId}
      />
    );
  };
  const renderFooter = () => {
    return <View style={{height: hdp(17)}} />;
  };
  return (
    <MainLayout
      backHeader
      title={tr('productReview.headerTitle')}
      showLogo={false}
      onBackIconPress={() => navigation?.goBack()}>
      <View
        style={[
          styles.topContainer,
          {borderColor: theme.productReview.separator},
        ]}>
        <TouchableOpacity
          onPress={() =>
            navigation?.navigate('writeReview', {
              details: route?.params.details,
            })
          }
          style={[
            styles.titleContainer,
            {borderColor: theme.productReview.containerBorder},
          ]}>
          <GenericText
            style={[
              styles.title,
              {color: theme.productReview.darkText, fontSize: theme.text.s5},
            ]}>
            {tr('productReview.title')} {rating} {tr('productReview.title1')}
          </GenericText>
          <Rating
            rating={rating}
            emptyStarColor={theme.productReview.emptyStar}
            starSize={theme.text.s3}
            starStyle={{marginLeft: '2%'}}
            containerStyle={{marginTop: '2%'}}
            onRatingStart={() =>
              navigation?.navigate('writeReview', {
                details: route?.params.details,
              })
            }
          />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={comments}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => renderFooter()}
        ItemSeparatorComponent={() => <View style={{height: hdp(3)}} />}
      />
    </MainLayout>
  );
};
export default ProductReview;

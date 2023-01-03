import React from 'react';
import MainLayout from '../../MainLayout';
import {FlatList, View} from 'react-native';
import {tr} from '../../../resources/translations';
import {hdp} from '../../../utils/responsive';
import {FavoriteProps} from '../../../resources/interfaces/screens/favorite';
import {products} from '../../../resources/staticData/products';
import FavoriteItem from '../../../components/FavoriteItem';

const Favorite = ({navigation}: FavoriteProps) => {
  const renderItem = ({item}) => {
    return (
      <FavoriteItem
        productId={item.id}
        imageUri={
          !!item.imageUri
            ? item.imageUri
            : 'https://dummyimage.com/105/cccccc/000000'
        }
        title={item.name}
        price={item.offerPrice}
        size={item.size}
        rating={item.rating}
        onPress={() => navigation?.navigate('productDetails', {details: item})}
      />
    );
  };
  const renderFooter = () => {
    return <View style={{height: hdp(15)}} />;
  };
  return (
    <MainLayout tabHeader title={tr('favorite.headerTitle')}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => renderFooter()}
        ItemSeparatorComponent={() => <View style={{height: hdp(1)}} />}
      />
    </MainLayout>
  );
};
export default Favorite;

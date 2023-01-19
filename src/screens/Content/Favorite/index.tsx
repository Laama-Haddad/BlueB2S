import React from 'react';
import MainLayout from '../../MainLayout';
import {FlatList, View} from 'react-native';
import {tr} from '../../../resources/translations';
import {getByScreenSize, hdp} from '../../../utils/responsive';
import {FavoriteProps} from '../../../resources/interfaces/screens/favorite';
import {products} from '../../../resources/staticData/products';
import FavoriteItem from '../../../components/FavoriteItem';
import {RootState} from '../../../redux/store';
import {connect} from 'react-redux';
import GenericText from '../../../components/GenericText';
import styles from './styles';
import Button from '../../../components/Button';
import {useTheme} from '@react-navigation/native';
import {showGlobalModal} from '../../../connected-components/Modal/actions';
import {updateFavoriteList} from '../../../utils/favoriteFuncs';
import {ProductItem} from '../../../resources/interfaces/items/productItem';
import {CartItem} from '../../../resources/interfaces/items/cartItem';
import {updateCartList} from '../../../utils/cartFuncs';

const Favorite = ({navigation, cart, favorite}: FavoriteProps) => {
  const {cartList} = cart;
  const theme = useTheme();
  const {favoriteList} = favorite;
  const updateCart = (inCart: boolean, item: ProductItem) => {
    const tempItem: CartItem = {
      ...item,
      itemCartId: cartList.length,
      quantity: 1,
    };
    updateCartList(cartList, tempItem, inCart).then();
  };
  const renderItem = ({item}) => {
    let idx = favoriteList.findIndex(itemId => itemId === item.id);
    if (idx > -1) {
      return (
        <FavoriteItem
          productId={item.id}
          imageUri={
            item.imageUri
              ? item.imageUri
              : 'https://dummyimage.com/105/cccccc/000000'
          }
          title={item.name}
          price={item.offerPrice}
          size={item.size}
          rating={item.rating}
          onPress={() =>
            navigation?.navigate('productDetails', {details: item})
          }
          isFavorite={favoriteList.includes(item.id)}
          toggleFavorite={favoriteItem =>
            showGlobalModal({
              message: tr('favorite.confirmDeleteFavoriteMessage'),
              type: 'question',
              onConfirm: () =>
                updateFavoriteList(
                  favoriteList,
                  item.id,
                  favoriteItem.isFavorite,
                ).then(),
            })
          }
          isAddedToCart={
            cartList.findIndex(cartItem => cartItem.id === item.id) > -1
          }
          onPressCartIcon={() => {
            let existInCart =
              cartList.findIndex(cartItem => cartItem.id === item.id) > -1;
            updateCart(existInCart, item);
          }}
        />
      );
    }
  };
  const renderFooter = () => {
    return <View style={{height: hdp(15)}} />;
  };
  const renderEmptyList = () => {
    return (
      <View style={styles.emptyContainer}>
        <GenericText
          style={[
            styles.text,
            {fontSize: theme.text.s5, color: theme.cart.emptyTitle},
          ]}>
          {tr('favorite.emptyTitle')}
        </GenericText>
        <GenericText
          style={{
            fontSize: theme.text.s9,
            color: theme.cart.emptyMessage,
            textAlign: 'center',
            marginTop: '1%',
            marginBottom: '5%',
          }}>
          {tr('favorite.emptyMessage')}
        </GenericText>
        <Button
          title={tr('favorite.shopping')}
          backgroundColor={theme.cart.shoppingBackground}
          // containerStyle={{width: wdp(35)}}
          titleStyle={{
            fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
          }}
          onPress={() => navigation?.navigate('home')}
        />
      </View>
    );
  };
  return (
    <MainLayout tabHeader title={tr('favorite.headerTitle')}>
      {favoriteList.length === 0 ? (
        renderEmptyList()
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => renderFooter()}
          ItemSeparatorComponent={() => <View style={{height: hdp(1)}} />}
        />
      )}
    </MainLayout>
  );
};

const mapStateToProps = (state: RootState) => ({
  favorite: state.favorite,
  cart: state.cart,
});

export default connect(mapStateToProps)(Favorite);

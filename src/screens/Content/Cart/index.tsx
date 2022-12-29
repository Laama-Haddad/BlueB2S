import React from 'react';
import MainLayout from '../../MainLayout';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {tr} from '../../../resources/translations';
import CartItem from '../../../components/CartItem';
import {products} from '../../../resources/staticData/products';
import {CartProps} from '../../../resources/interfaces/screens/cart';

const Cart = ({}: CartProps) => {
  const renderItem = ({item}) => {
    return (
      <CartItem
        productId={item.id}
        imageUri={item.imageUri}
        title={item.name}
        price={item.offerPrice}
        size={item.size}
        selectedQuantity={1}
        onQuantityChange={val => {
          // const newItem: ItemCartProps = {...item, quantity: val.quantity};
          // updateCartList(cartList, newItem, val.quantity != 0).then()
        }}
        containerStyle={{marginVertical: '2%'}}
      />
    );
  };
  return (
    <MainLayout tabHeader title={tr('cart.headerTitle')}>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => (
            <View style={{width: '100%', height: 30}} />
          )}
          style={{}}
        />
      </View>
    </MainLayout>
  );
};
export default Cart;

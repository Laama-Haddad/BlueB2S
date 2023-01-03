import React from 'react';
import MainLayout from '../../MainLayout';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {tr} from '../../../resources/translations';
import CartItem from '../../../components/CartItem';
import {products} from '../../../resources/staticData/products';
import {CartProps} from '../../../resources/interfaces/screens/cart';
import GenericText from '../../../components/GenericText';
import {useTheme} from '@react-navigation/native';
import Button from '../../../components/Button';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';

const Cart = ({navigation}: CartProps) => {
  const theme = useTheme();
  const renderItem = ({item}) => {
    return (
      <CartItem
        productId={item.id}
        imageUri={
          !!item.imageUri
            ? item.imageUri
            : 'https://dummyimage.com/105/cccccc/000000'
        }
        title={item.name}
        price={item.offerPrice}
        size={item.size}
        selectedQuantity={1}
        onQuantityChange={val => {
          // const newItem: ItemCartProps = {...item, quantity: val.quantity};
          // updateCartList(cartList, newItem, val.quantity != 0).then()
        }}
      />
    );
  };
  const renderFooter = () => {
    return (
      <>
        <View
          style={[
            styles.totalPriceContainer,
            {borderColor: theme.cart.border},
          ]}>
          <GenericText
            style={[
              styles.totalPrice,
              {fontSize: theme.text.s7, color: theme.cart.totalPrice},
            ]}>
            {tr('cart.total')}: 2500 {tr('app.currency')}
          </GenericText>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={tr('cart.shopping')}
            backgroundColor={theme.cart.shoppingBackground}
            containerStyle={{width: wdp(35)}}
            titleStyle={{
              fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
            }}
            onPress={() => navigation?.navigate('home')}
          />
          <Button
            title={tr('cart.checkOut')}
            backgroundColor={theme.cart.checkOutBackground}
            containerStyle={{width: wdp(35)}}
            titleStyle={{
              fontSize: getByScreenSize(theme.text.s9, theme.text.s7),
            }}
            onPress={() => navigation?.navigate('home')}
          />
        </View>
      </>
    );
  };
  return (
    <MainLayout tabHeader title={tr('cart.headerTitle')}>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => renderFooter()}
          ItemSeparatorComponent={() => <View style={{height: hdp(1)}} />}
        />
      </View>
    </MainLayout>
  );
};
export default Cart;

import React, {useEffect, useState} from 'react';
import MainLayout from '../../MainLayout';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {tr} from '../../../resources/translations';
import CartListItem from '../../../components/CartListItem';
import {CartProps} from '../../../resources/interfaces/screens/cart';
import GenericText from '../../../components/GenericText';
import {useTheme} from '@react-navigation/native';
import Button from '../../../components/Button';
import {getByScreenSize, hdp, wdp} from '../../../utils/responsive';
import {RootState} from '../../../redux/store';
import {connect} from 'react-redux';
import {updateCartList} from '../../../utils/cartFuncs';
import {CartItem} from '../../../resources/interfaces/items/cartItem';

const Cart = ({navigation, cart}: CartProps) => {
  const theme = useTheme();
  const [discount, setDiscount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const {cartList} = cart;
  const calculateTotalAmount = () => {
    let total = 0;
    cartList?.map(item => (total = total + item.offerPrice * item.quantity));
    // let d = (total * discountPercentage) / 100;
    // discountPercentage != 0 && setDiscount(d);
    setTotalAmount(total);
  };
  // const onApply = () => {
  //     coupon === '2022' ? setDiscountPercentage(10) : coupon === '2021' ? setDiscountPercentage(5) : showGlobalModal({
  //         message: tr('cart.couponMessage'), title: tr('cart.couponTitle'), type: "info"
  //     })
  // }
  useEffect(() => {
    calculateTotalAmount();
  }, [cartList, discountPercentage]);
  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyContainer}>
        <GenericText
          style={[
            styles.text,
            {fontSize: theme.text.s5, color: theme.cart.emptyTitle},
          ]}>
          {tr('cart.emptyTitle')}
        </GenericText>
        <GenericText
          style={{
            fontSize: theme.text.s7,
            color: theme.cart.emptyMessage,
            textAlign: 'center',
            marginTop: '1%',
            marginBottom: '5%',
          }}>
          {tr('cart.emptyMessage')}
        </GenericText>
        <Button
          title={tr('cart.shopping')}
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
  const renderItem = ({item}) => {
    return (
      <CartListItem
        productId={item.id}
        imageUri={
          item.imageUri
            ? item.imageUri
            : 'https://dummyimage.com/105/cccccc/000000'
        }
        title={item.name}
        price={item.offerPrice}
        size={item.size}
        selectedQuantity={1}
        onQuantityChange={val => {
          const newItem: CartItem = {...item, quantity: val.quantity};
          updateCartList(cartList, newItem, false, true).then();
        }}
        onDeletePress={() => updateCartList(cartList, item, true).then()}
      />
    );
  };
  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
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
            {tr('cart.total')}: {totalAmount.toFixed(2)} {tr('app.currency')}
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
            onPress={() => navigation?.navigate('placeOrder')}
          />
        </View>
      </View>
    );
  };
  return (
    <MainLayout tabHeader title={tr('cart.headerTitle')}>
      <View style={styles.container}>
        {cartList.length !== 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cartList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            // ListFooterComponent={() => renderFooter()}
            ItemSeparatorComponent={() => <View style={{height: hdp(1)}} />}
          />
        ) : (
          renderEmptyCart()
        )}
        {cartList?.length !== 0 && renderFooter()}
      </View>
    </MainLayout>
  );
};
const mapStateToProps = (state: RootState) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);

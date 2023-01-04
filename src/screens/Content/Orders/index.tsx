import React from 'react';
import MainLayout from '../../MainLayout';
import {FlatList, View} from 'react-native';
import {tr} from '../../../resources/translations';
import {hdp} from '../../../utils/responsive';
import {orderList} from '../../../resources/staticData/orders';
import {OrdersProps} from '../../../resources/interfaces/screens/orders';
import OrderListItem from '../../../components/OrderListItem';

const Orders = ({navigation}: OrdersProps) => {
  const renderItem = ({item}) => {
    return (
      <OrderListItem
        status={item.status}
        orderNumber={item.orderNumber}
        paymentType={item.paymentType}
        orderDate={item.orderDate}
        deliverDate={item.deliverDate}
        numOfItems={item.numOfItems}
        price={item.price}
        onPress={() => {}
          // navigation?.navigate('trackOrder', {order: item})
        }
      />
    );
  };
  const renderFooter = () => {
    return <View style={{height: hdp(15)}} />;
  };
  return (
    <MainLayout tabHeader title={tr('orders.headerTitle')}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orderList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => renderFooter()}
        ItemSeparatorComponent={() => <View style={{height: hdp(1)}} />}
      />
    </MainLayout>
  );
};
export default Orders;

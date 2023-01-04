import React, {useEffect, useState} from 'react';
import {OrderListItemProps} from '../../resources/interfaces/components/orderListItem';
import Icon from '../Icon';
import {orderPaymentTypes, orderTypes} from '../../utils/enums';
import {getByScreenSize} from '../../utils/responsive';
import Ripple from 'react-native-material-ripple';
import {tr} from '../../resources/translations';
import {convertTimestampToDate} from '../../utils/dateFuncs';
import {View} from 'react-native';
import styles from './styles';
import GenericText from '../GenericText';
import {useTheme} from '@react-navigation/native';

const OrderListItem = ({
  status,
  containerStyle,
  orderNumber,
  numOfItems,
  paymentType,
  orderDate,
  deliverDate,
  price,
  onPress,
}: OrderListItemProps) => {
  const theme = useTheme();
  const [ordersTypes, setOrdersTypes] = useState(orderTypes);
  useEffect(() => {
    setOrdersTypes(orderTypes);
  }, []);
  const iconNames = {
    cancel: 'close',
    shipped: 'orderShipped',
    delivered: 'check',
  };
  const iconBackground = {
    cancel: theme.orderListItem.cancelIconBackground,
    shipped: theme.orderListItem.shippedIconBackground,
    delivered: theme.orderListItem.checkIconBackground,
  };
  const statusColor = {
    cancel: theme.orderListItem.cancelIconBackground,
    shipped: theme.orderListItem.shippedIconBackground,
    delivered: theme.orderListItem.checkIconBackground,
  };
  let d = convertTimestampToDate(orderDate);
  let dd = convertTimestampToDate(deliverDate);
  return (
    <Ripple
      style={[
        styles.container,
        {
          backgroundColor: theme.orderListItem.containerBackground,
          borderColor: theme.orderListItem.containerBorder,
        },
        containerStyle,
      ]}
      disabled={!onPress}
      onPress={onPress}
      rippleContainerBorderRadius={12}>
      <View
        style={[
          styles.iconContainer,
          {backgroundColor: iconBackground[status]},
        ]}>
        <Icon
          name={iconNames[status]}
          size={theme.text.s9}
          type={'SVG'}
          color={'white'}
        />
      </View>
      <View style={styles.middleContainer}>
        <GenericText
          style={[
            styles.title,
            {
              fontSize: getByScreenSize(theme.text.s9, theme.text.s8),
              color: theme.orderListItem.text,
            },
          ]}>
          {tr('orderItem.orderNo')}: #{orderNumber}
        </GenericText>
        <GenericText
          style={[
            styles.description,
            {
              fontSize: getByScreenSize(theme.text.s10, theme.text.s9),
              color: theme.orderListItem.date,
            },
          ]}>
          {tr('orderItem.orderDate')}: {String(d.day).padStart(2, '0')}/
          {String(d.month).padStart(2, '0')}/{d.year},{' '}
          {String(d.hours).padStart(2, '0')}:
          {String(d.minutes).padStart(2, '0')}
        </GenericText>
        <GenericText
          style={[
            styles.description,
            {
              fontSize: getByScreenSize(theme.text.s10, theme.text.s9),
              color: theme.orderListItem.date,
            },
          ]}>
          {tr('orderItem.deliverDate')}: {String(dd.day).padStart(2, '0')}/
          {String(dd.month).padStart(2, '0')}/{dd.year}
        </GenericText>
        <GenericText
          style={[
            styles.title,
            {
              fontSize: getByScreenSize(theme.text.s9, theme.text.s8),
              color: theme.orderListItem.price,
            },
          ]}>
          {price} {tr('app.currency')}
        </GenericText>
      </View>
      <View style={styles.rightContainer}>
        <GenericText
          style={[
            styles.title,
            {
              color: theme.orderListItem.text,
              fontSize: getByScreenSize(theme.text.s9, theme.text.s8),
            },
          ]}>
          {orderPaymentTypes[paymentType]}
        </GenericText>
        <GenericText
          style={[
            styles.description,
            {color: theme.orderListItem.text, fontSize: theme.text.s9},
          ]}>
          {tr('orderItem.quan')}: {numOfItems}
        </GenericText>
        <GenericText
          style={[
            styles.statusText,
            {
              fontSize: getByScreenSize(theme.text.s9, theme.text.s8),
              color: statusColor[status],
            },
          ]}>
          {ordersTypes[status]}
        </GenericText>
      </View>
    </Ripple>
  );
};
export default OrderListItem;

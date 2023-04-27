import React, {useState} from 'react';
import MainLayout from '../../../MainLayout';
import {tr} from '../../../../resources/translations';
import styles from './styles';
import {View} from 'react-native';
import GenericText from '../../../../components/GenericText';
import {PlaceOrderProps} from '../../../../resources/interfaces/screens/placeOrder';
import {useTheme} from '@react-navigation/native';
import Button from '../../../../components/Button';
import {hdp} from '../../../../utils/responsive';
import RadioGroup from '../../../../components/RadioGroup';
import {PaymentMethodItem} from '../../../../resources/interfaces/items/paymentMethodItem';
import CirclePaymentMethod from '../../../../components/CirclePaymentMethod';

const PlaceOrder = ({navigation}: PlaceOrderProps) => {
  const theme = useTheme();
  const [paymentMethod, setPaymentMethod] = useState('');
  const paymentMethodList: PaymentMethodItem[] = [
    {
      id: 0,
      name: 'ImagePayPal',
    },
    {
      id: 1,
      name: 'ImageMastercard',
    },
    {
      id: 2,
      name: 'ImageVISAcard',
    },
    {
      id: 3,
      name: 'ImageLocalgateway',
    },
  ];

  const renderPolicyContainer = () => {
    return (
      <View style={{marginTop: '7%', marginBottom: '5%'}}>
        <View style={styles.policyTextContainer}>
          <GenericText
            style={[
              {color: theme.placeOrder.lightText, fontSize: theme.text.s10},
            ]}>
            {tr('placeOrder.agree')}
          </GenericText>
        </View>
        <View style={styles.policyTextContainer}>
          <GenericText
            style={[
              {color: theme.placeOrder.coloredText, fontSize: theme.text.s9},
            ]}>
            {tr('placeOrder.policy')}
          </GenericText>
          <GenericText
            style={[
              {color: theme.placeOrder.lightText, fontSize: theme.text.s9},
            ]}>
            {' '}
            {tr('placeOrder.and')}{' '}
          </GenericText>
          <GenericText
            style={[
              {color: theme.placeOrder.coloredText, fontSize: theme.text.s9},
            ]}>
            {tr('placeOrder.condition')}
          </GenericText>
        </View>
      </View>
    );
  };
  return (
    <MainLayout
      enableScroll
      backHeader
      onBackIconPress={() => navigation?.goBack()}
      title={tr('placeOrder.headerTitle')}>
      <View style={styles.container}>
        <View
          style={[
            styles.categoryContainer,
            {borderColor: theme.placeOrder.containerBorder},
          ]}>
          <View style={styles.rowContainer}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
                fontWeight: '600',
              }}>
              {tr('placeOrder.shippingTo')}:
            </GenericText>
            <GenericText
              style={[
                styles.text,
                {fontSize: theme.text.s9, color: theme.placeOrder.darkText},
              ]}>
              Brazil
            </GenericText>
          </View>
          <View
            style={[
              styles.separator,
              {
                borderColor: theme.placeOrder.separator,
                backgroundColor: theme.placeOrder.separator,
              },
            ]}
          />
          <View style={styles.rowContainer}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
                fontWeight: '600',
              }}>
              {tr('placeOrder.orderCost')}:
            </GenericText>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.darkText,
              }}>
              1780.00 {tr('app.currency')}
            </GenericText>
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
                fontWeight: '600',
              }}>
              {tr('placeOrder.shippingCost')}:
            </GenericText>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.darkText,
              }}>
              10.00 {tr('app.currency')}
            </GenericText>
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
                fontWeight: '600',
              }}>
              {tr('placeOrder.estimatedVat')}:
            </GenericText>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.darkText,
              }}>
              00.00 {tr('app.currency')}
            </GenericText>
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={[
                styles.text,
                {fontSize: theme.text.s9, color: theme.placeOrder.darkText},
              ]}>
              {tr('placeOrder.totalAmount')}:
            </GenericText>
            <GenericText
              style={[
                styles.text,
                {fontSize: theme.text.s9, color: theme.placeOrder.darkText},
              ]}>
              1790.00 {tr('app.currency')}
            </GenericText>
          </View>
        </View>
        <View
          style={[
            styles.categoryContainer,
            {borderColor: theme.placeOrder.containerBorder, height: hdp(6)},
          ]}>
          <View style={[styles.rowContainer, {paddingVertical: 0}]}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
                fontWeight: '600',
              }}>
              {tr('placeOrder.shippingAddress')}:{' '}
            </GenericText>
            <GenericText
              style={[
                styles.text,
                {fontSize: theme.text.s9, color: theme.placeOrder.darkText},
              ]}>
              James 6544, Lake Shore..
            </GenericText>
          </View>
        </View>
        <View
          style={[
            styles.categoryContainer,
            {
              borderColor: theme.placeOrder.containerBorder,
              height: hdp(6),
              marginBottom: '2%',
            },
          ]}>
          <GenericText
            style={[
              styles.text,
              {fontSize: theme.text.s9, color: theme.placeOrder.darkText},
            ]}>
            {tr('placeOrder.select')}
          </GenericText>
        </View>
        <RadioGroup
          list={paymentMethodList}
          renderItem={(item, selected) => (
            <CirclePaymentMethod
              paymentMethodItem={{id: item.id, name: item.name}}
              selected={selected === item.id}
            />
          )}
          onValueChange={selectedId =>
            paymentMethodList.filter(item =>
              item.id === selectedId
                ? setPaymentMethod(item.name)
                : setPaymentMethod(''),
            )
          }
        />
        {renderPolicyContainer()}
        <Button
          title={tr('placeOrder.submit')}
          backgroundColor={theme.placeOrder.submitBackground}
          onPress={() => navigation?.goBack()}
          containerStyle={styles.submit}
        />
      </View>
    </MainLayout>
  );
};
export default PlaceOrder;

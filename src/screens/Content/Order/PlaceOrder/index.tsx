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

const PlaceOrder = ({navigation}: PlaceOrderProps) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);
  const paymentMethodList = [
    'ImagePayPal',
    'ImageMastercard',
    'ImageVISAcard',
    'ImageLocalgateway',
  ];
  const renderPolicyContainer = () => {
    return (
      <View style={{marginTop: '7%', marginBottom: '5%'}}>
        <View style={styles.policyTextContainer}>
          <GenericText
            style={[
              {color: theme.placeOrder.lightText, fontSize: theme.text.s9},
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
  const renderItem = (item, key) => {
    return (
      <View key={key} style={styles.radioButtonRow}>
        <View
          style={[
            styles.outlineCircle,
            {borderColor: theme.placeOrder.outlineCircle},
          ]}>
          {selected && (
            <View
              style={[
                styles.solidCircle,
                {backgroundColor: theme.placeOrder.solidCircle},
              ]}
            />
          )}
        </View>
        <GenericText
          style={[
            styles.radioText,
            {
              fontSize: theme.text.s8,
              backgroundColor: theme.placeOrder.grayContainerBackground,
              color: theme.placeOrder.darkText,
            },
          ]}>
          {item}
        </GenericText>
      </View>
    );
  };
  return (
    <MainLayout
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
              }}>
              {tr('placeOrder.shippingTo')}:
            </GenericText>
            <GenericText
              style={[
                styles.text,
                {fontSize: theme.text.s9, color: theme.placeOrder.darkText},
              ]}>
              James Button, Rol, Brazil.
            </GenericText>
          </View>
          <View
            style={[
              styles.separator,
              {borderColor: theme.placeOrder.separator},
            ]}
          />
          <View style={styles.rowContainer}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
              }}>
              {tr('placeOrder.orderCost')}:
            </GenericText>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.darkText,
              }}>
              29.00 {tr('app.currency')}
            </GenericText>
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
              }}>
              {tr('placeOrder.shippingCost')}:
            </GenericText>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.darkText,
              }}>
              29.00 {tr('app.currency')}
            </GenericText>
          </View>
          <View style={styles.rowContainer}>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.lightText,
              }}>
              {tr('placeOrder.estimatedVat')}:
            </GenericText>
            <GenericText
              style={{
                fontSize: theme.text.s9,
                color: theme.placeOrder.darkText,
              }}>
              19.00 {tr('app.currency')}
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
              349.00 {tr('app.currency')}
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
              }}>
              {tr('placeOrder.shippingAddress')}:{' '}
            </GenericText>
            <GenericText
              style={[
                styles.text,
                {fontSize: theme.text.s9, color: theme.placeOrder.darkText},
              ]}>
              James Button 6544, Lake Shore..
            </GenericText>
          </View>
        </View>
        <View
          style={[
            styles.categoryContainer,
            {
              borderColor: theme.placeOrder.containerBorder,
              height: hdp(6),
              marginBottom: '5%',
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
        {paymentMethodList.map((item, key) => renderItem(item, key))}
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

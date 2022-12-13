import React from 'react';
import {connect} from 'react-redux';
import {closeGlobalModal} from './actions';
import {RootState} from '../../redux/store';
import {ModalProps} from '../../resources/interfaces/connected-components/modal';
import {tr} from '../../resources/translations';
import {Modal, TouchableOpacity, View} from 'react-native';
import {modalTypes} from '../../utils/enums';
import Ripple from 'react-native-material-ripple';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import GenericText from '../../components/GenericText';

const GlobalModal = ({modal}: ModalProps) => {
  const {message, title, isVisible, type, onConfirm, onReject} = modal || {};
  const theme = useTheme();
  const closeModal = (status: 'confirm' | 'reject' = 'confirm') => {
    if (status === 'confirm') {
      if (onConfirm) {
        onConfirm();
      }
      closeGlobalModal();
    } else {
      if (onReject) {
        onReject();
      }
      closeGlobalModal();
    }
  };
  const getContentByType = () => {
    switch (type) {
      case modalTypes.info:
        return (
          <View style={styles.modalView}>
            <View
              style={[
                styles.titleView,
                {backgroundColor: theme.modal.titleBackground},
              ]}>
              <GenericText
                style={[
                  styles.title,
                  {
                    color: theme.modal.title,
                    fontSize: theme.text.s6,
                  },
                ]}>
                {title}
              </GenericText>
            </View>
            <View
              style={[
                styles.messageView,
                {backgroundColor: theme.modal.messageBackground},
              ]}>
              <GenericText
                style={[
                  styles.message,
                  {
                    color: theme.modal.message,
                    fontSize: theme.text.s7,
                  },
                ]}>
                {message}
              </GenericText>
              <TouchableOpacity
                style={[
                  styles.submit,
                  {backgroundColor: theme.modal.okBackground},
                ]}
                onPress={() => closeModal()}>
                <GenericText
                  style={[
                    styles.ok,
                    {
                      color: theme.modal.okTitle,
                      fontSize: theme.text.s8,
                    },
                  ]}>
                  {tr('modal.ok')}
                </GenericText>
              </TouchableOpacity>
            </View>
          </View>
        );
      case modalTypes.question:
        return (
          <View
            style={[
              styles.questionModalView,
              {backgroundColor: theme.modal.messageBackground},
            ]}>
            <GenericText
              style={[
                styles.message,
                {
                  color: theme.modal.message,
                  fontSize: theme.text.s7,
                },
              ]}>
              {message}
            </GenericText>
            <View style={styles.rowView}>
              <Ripple
                style={[
                  styles.button,
                  {borderRightWidth: 0.5, borderColor: theme.modal.borderColor},
                ]}
                onPress={() => closeModal()}>
                <GenericText
                  style={[
                    styles.buttonText,
                    {
                      fontSize: theme.text.s8,

                      color: theme.modal.message,
                    },
                  ]}>
                  {tr('app.yes')}
                </GenericText>
              </Ripple>
              <Ripple
                style={[
                  styles.button,
                  {borderLeftWidth: 0.5, borderColor: theme.modal.borderColor},
                ]}
                onPress={() => closeModal('reject')}>
                <GenericText
                  style={[
                    styles.buttonText,
                    {
                      fontSize: theme.text.s8,

                      color: theme.modal.message,
                    },
                  ]}>
                  {tr('app.no')}
                </GenericText>
              </Ripple>
            </View>
          </View>
        );
    }
  };
  return (
    <Modal visible={isVisible} transparent animated animationType={'fade'}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.modal.containerBackground},
        ]}>
        {getContentByType()}
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  modal: state.modal,
});

export default connect(mapStateToProps, null)(GlobalModal);

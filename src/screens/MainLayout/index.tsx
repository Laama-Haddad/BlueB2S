import React from 'react';
import {MainLayoutProps} from '../../resources/interfaces/screens/mainLayout';
import styles from './styles';
import {Animated, KeyboardAvoidingView, Platform, View} from 'react-native';
import Header from '../../components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '@react-navigation/native';

const MainLayout = ({
  tabHeader = false,
  backHeader = false,
  customLeftHeader = false,
  tabPage = false,
  enableScroll = true,
  noPadding = false,
  backgroundColor,
  bottomSpace = false,
  keyboardAvoidScrollView,
  enableOnAndroid,
  onScroll,
  children,
  headerRef,
  containerStyle,
  ...props
}: MainLayoutProps) => {
  // const PageView = enableScroll
  //   ? () => <View style={styles.mainView} />
  //   : () => <Animated.ScrollView style={styles.mainScrollView} />;
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.homeBackground,
        },
        containerStyle,
      ]}>
      {backHeader && <Header showBackIcon ref={headerRef} {...props} />}
      {tabHeader && <Header showMenuIcon ref={headerRef} {...props} />}
      {customLeftHeader && <Header {...props} />}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.mainScrollView, noPadding && {paddingHorizontal: 0}]}
        onScroll={onScroll}>
        {keyboardAvoidScrollView ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={48}
            style={{
              flexGrow: 1,
              width: '100%',
            }}>
            <KeyboardAwareScrollView
              enableOnAndroid={enableOnAndroid}
              contentContainerStyle={{
                flexGrow: 1,
              }}
              keyboardShouldPersistTaps="handled">
              {children}
            </KeyboardAwareScrollView>
          </KeyboardAvoidingView>
        ) : (
          children
        )}
      </Animated.ScrollView>
      {tabPage && <View style={styles.spacer} />}
      {bottomSpace && <View style={styles.bottomSpacer} />}
    </View>
  );
};
export default MainLayout;

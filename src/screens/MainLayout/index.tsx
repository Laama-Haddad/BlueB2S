import React from 'react';
import {MainLayoutProps} from '../../resources/interfaces/screens/mainLayout';
import styles from './styles';
import {
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const MainLayout = ({
  tabHeader = false,
  backHeader = false,
  customLeftHeader = false,
  tabPage = false,
  enableScroll = false,
  noPadding = false,
  backgroundColor,
  bottomSpace = false,
  keyboardAvoidScrollView,
  enableOnAndroid,
  onScroll,
  children,
  headerRef,
  containerStyle,
  showProfilePic = false,
  onPressProfilePic,
  ...props
}: MainLayoutProps) => {
  const theme = useTheme();
  const user = useSelector(state => state.user);
  const {logged} = useSelector(state => state.auth);
  const {personalInfo} = user;
  const renderContent = () => {
    return (
      <>
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
          <>{children}</>
        )}
      </>
    );
  };
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
      {tabHeader && <Header ref={headerRef} {...props} />}
      {showProfilePic && (
        <TouchableOpacity
          style={[styles.imageContainer]}
          disabled={!personalInfo.profileImage || !logged}
          onPress={onPressProfilePic}>
          <Image
            source={
              !!personalInfo.profileImage && logged
                ? {uri: personalInfo?.profileImage.uri}
                : {
                    uri: 'https://i.postimg.cc/tT700h6t/download.png',
                  }
            }
            resizeMode={'contain'}
            style={[styles.image, {borderColor: theme.homeBackground}]}
          />
        </TouchableOpacity>
      )}
      {customLeftHeader && <Header {...props} />}
      {!enableScroll ? (
        <View style={[styles.mainView, noPadding && {paddingHorizontal: 0}]}>
          {renderContent()}
        </View>
      ) : (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.mainScrollView, noPadding && {paddingHorizontal: 0}]}
          onScroll={onScroll}>
          {renderContent()}
        </Animated.ScrollView>
      )}
      {tabPage && <View style={styles.spacer} />}
      {bottomSpace && <View style={styles.bottomSpacer} />}
    </View>
  );
};
export default MainLayout;

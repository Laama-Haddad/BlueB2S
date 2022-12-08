import React from 'react';
import {I18nManager, Platform, StatusBar, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ripple from 'react-native-material-ripple';
import {HeaderProps} from '../../resources/interfaces/components/header';
import styles from './styles';
import LogoSVG from '../../resources/assets/svg/logo.svg';

function Header({
  noPaddingTop = false,
  isModal = false,
  headerBackground,
  title,
  titleColor,
  titleStyle,
  showBackIcon,
  backIconColor,
  showMenuIcon,
  menuIconColor,
  iconSize,
  iconStyle,
  onBackIconPress,
  onMenuIconPress,
  showLogo,
  headerStyle,
}: HeaderProps) {
  const onMenuPressed = () => {
    if (onMenuIconPress) {
      onMenuIconPress();
    }
  };
  const onBackPressed = () => {
    if (onBackIconPress) {
      onBackIconPress();
    }
  };
  return (
    <View
      style={{
        overflow: 'hidden',
        paddingBottom: 2,
      }}>
      <View
        style={[
          styles.container,
          headerBackground && {backgroundColor: headerBackground},
          !noPaddingTop && {
            paddingTop:
              Platform.OS === 'android'
                ? StatusBar.currentHeight
                : isModal
                ? 12
                : 50,
          },
          headerStyle,
        ]}>
        <View style={styles.leftContainer}>
          {showBackIcon && (
            <Ripple
              onPress={onBackPressed}
              style={[styles.rippleIcon, iconStyle]}>
              <Feather
                name={I18nManager.isRTL ? 'chevron-right' : 'chevron-left'}
                color={backIconColor ? backIconColor : '#C500FF'}
                size={iconSize ? iconSize : 30}
              />
            </Ripple>
          )}
          {showMenuIcon && (
            <Ripple
              onPress={onMenuPressed}
              style={[styles.rippleIcon, iconStyle]}>
              <Feather
                name="menu"
                color={menuIconColor ? menuIconColor : '#C500FF'}
                size={iconSize ? iconSize : 15}
              />
            </Ripple>
          )}
        </View>
        <View style={styles.centerContainer}>
          <Text
            style={[
              styles.title,
              !!titleColor && {color: titleColor},
              titleStyle,
            ]}>
            {title}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          {showLogo && <LogoSVG width={50} height={50} />}
        </View>
      </View>
    </View>
  );
}

export default Header;

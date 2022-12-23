import React from 'react';
import {Platform, StatusBar, Text, View} from 'react-native';
import {HeaderProps} from '../../resources/interfaces/components/header';
import styles from './styles';
// @ts-ignore
import HeaderLogoSVG from '../../resources/assets/svg/headerLogo.svg';
import Icon from '../Icon';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize} from '../../utils/responsive';

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
  showLogo = true,
  headerStyle,
}: HeaderProps) {
  const theme = useTheme();
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
          {
            backgroundColor: !!headerBackground
              ? headerBackground
              : theme.header.background,
          },
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
            <Icon
              name={'chevron-back'}
              type={'Ionicons'}
              color={backIconColor ? backIconColor : theme.icon.icon}
              size={
                iconSize
                  ? iconSize
                  : getByScreenSize(theme.text.s8, theme.text.s6)
              }
              role={'button'}
              onPress={onBackPressed}
              style={iconStyle}
            />
          )}
          {showMenuIcon && (
            <Icon
              name={'menu'}
              type={'Ionicons'}
              color={menuIconColor ? menuIconColor : theme.icon.icon}
              size={
                iconSize
                  ? iconSize
                  : getByScreenSize(theme.text.s8, theme.text.s6)
              }
              role={'button'}
              onPress={onMenuPressed}
              style={iconStyle}
            />
          )}
        </View>
        <View style={styles.centerContainer}>
          <Text
            style={[
              styles.title,
              {
                fontSize: theme.text.s7,
                color: !!titleColor ? titleColor : theme.header.title,
              },
              titleStyle,
            ]}>
            {title}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          {showLogo && (
            <HeaderLogoSVG
              width={getByScreenSize(50, 75)}
              height={getByScreenSize(50, 75)}
            />
          )}
        </View>
      </View>
    </View>
  );
}

export default Header;

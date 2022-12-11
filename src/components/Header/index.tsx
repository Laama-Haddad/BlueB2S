import React from 'react';
import {Platform, StatusBar, Text, View} from 'react-native';
import {HeaderProps} from '../../resources/interfaces/components/header';
import styles from './styles';
import LogoSVG from '../../resources/assets/svg/logo.svg';
import Icon from '../Icon';
import {useTheme} from '@react-navigation/native';

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
              size={iconSize ? iconSize : theme.text.s6}
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
              size={iconSize ? iconSize : theme.text.s8}
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
          {showLogo && <LogoSVG width={50} height={50} />}
        </View>
      </View>
    </View>
  );
}

export default Header;

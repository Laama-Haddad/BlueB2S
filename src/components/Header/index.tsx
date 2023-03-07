import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {HeaderProps} from '../../resources/interfaces/components/header';
import styles from './styles';
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Icon from '../Icon';
import {useTheme} from '@react-navigation/native';
import {getByScreenSize, wdp} from '../../utils/responsive';
import GenericText from '../GenericText';

function Header({
  noPaddingTop = true,
  isModal = false,
  headerBackground,
  title,
  titleColor,
  titleStyle,
  showBackIcon,
  backIconColor,
  // showMenuIcon,
  // menuIconColor,
  iconSize,
  iconStyle,
  onBackIconPress,
  // onMenuIconPress,
  headerStyle,
}: HeaderProps) {
  const theme = useTheme();
  // const onMenuPressed = () => {
  //   if (onMenuIconPress) {
  //     onMenuIconPress();
  //   }
  // };
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
            backgroundColor: headerBackground
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
        {showBackIcon && (
          <View style={styles.leftContainer}>
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
              style={[
                {
                  width: getByScreenSize(wdp(7), wdp(6)),
                  height: getByScreenSize(wdp(7), wdp(6)),
                  borderRadius: getByScreenSize(wdp(3.5), wdp(3)),
                },
                iconStyle,
              ]}
            />
            {/*{showMenuIcon && (*/}
            {/*  <Icon*/}
            {/*    name={'menu'}*/}
            {/*    type={'Ionicons'}*/}
            {/*    color={menuIconColor ? menuIconColor : theme.icon.icon}*/}
            {/*    size={*/}
            {/*      iconSize*/}
            {/*        ? iconSize*/}
            {/*        : getByScreenSize(theme.text.s8, theme.text.s6)*/}
            {/*    }*/}
            {/*    role={'button'}*/}
            {/*    onPress={onMenuPressed}*/}
            {/*    style={[*/}
            {/*      {*/}
            {/*        width: getByScreenSize(wdp(7), wdp(6)),*/}
            {/*        height: getByScreenSize(wdp(7), wdp(6)),*/}
            {/*        borderRadius: getByScreenSize(wdp(3.5), wdp(3)),*/}
            {/*      },*/}
            {/*      iconStyle,*/}
            {/*    ]}*/}
            {/*  />*/}
            {/*)}*/}
          </View>
        )}
        <View style={styles.centerContainer}>
          <GenericText
            style={[
              styles.title,
              {
                fontSize: theme.text.s7,
                color: titleColor ? titleColor : theme.header.title,
              },
              titleStyle,
            ]}>
            {title}
          </GenericText>
        </View>
        <View style={styles.rightContainer} />
      </View>
    </View>
  );
}

export default Header;

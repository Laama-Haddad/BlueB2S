/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef} from 'react';
import _AntDesign from 'react-native-vector-icons/AntDesign';
import _Entypo from 'react-native-vector-icons/Entypo';
import _EvilIcons from 'react-native-vector-icons/EvilIcons';
import _Feather from 'react-native-vector-icons/Feather';
import _FontAwesome from 'react-native-vector-icons/FontAwesome';
import _FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import _Fontisto from 'react-native-vector-icons/Fontisto';
import _Foundation from 'react-native-vector-icons/Foundation';
import _Ionicons from 'react-native-vector-icons/Ionicons';
import _MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import _Octicons from 'react-native-vector-icons/Octicons';
import _Zocial from 'react-native-vector-icons/Zocial';

import Ripple from 'react-native-material-ripple';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';

import icons from '../../resources/icons/adapter';
import {IconProps} from '../../resources/interfaces/components/icon';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const AntDesign = Animated.createAnimatedComponent(_AntDesign);
const Entypo = Animated.createAnimatedComponent(_Entypo);
const EvilIcons = Animated.createAnimatedComponent(_EvilIcons);
const Feather = Animated.createAnimatedComponent(_Feather);
const FontAwesome = Animated.createAnimatedComponent(_FontAwesome);
const FontAwesome5 = Animated.createAnimatedComponent(_FontAwesome5);
const Fontisto = Animated.createAnimatedComponent(_Fontisto);
const Foundation = Animated.createAnimatedComponent(_Foundation);
const Ionicons = Animated.createAnimatedComponent(_Ionicons);
const MaterialCommunityIcons = Animated.createAnimatedComponent(
  _MaterialCommunityIcons,
);
const MaterialIcons = Animated.createAnimatedComponent(_MaterialIcons);
const SimpleLineIcons = Animated.createAnimatedComponent(_SimpleLineIcons);
const Octicons = Animated.createAnimatedComponent(_Octicons);
const Zocial = Animated.createAnimatedComponent(_Zocial);

const Icon = ({
  type,
  label,
  onPress,
  style,
  role,
  loading = false,
  background,
  ...props
}: IconProps) => {
  const theme = useTheme();
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = useCallback(() => {
    if (loading) {
      spinValue.setValue(0);

      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => spin());
    }
  }, [loading]);

  useEffect(() => {
    if (loading) {
      spin();
    }
  }, [loading]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const icon = useCallback(() => {
    switch (type) {
      case 'AntDesign':
        return (
          <AntDesign
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'Entypo':
        return (
          <Entypo
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'EvilIcons':
        return (
          <EvilIcons
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'Feather':
        return (
          <Feather
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'FontAwesome':
        return (
          <FontAwesome
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'FontAwesome5':
        return (
          <FontAwesome5
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'Fontisto':
        return (
          <Fontisto
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'Foundation':
        return (
          <Foundation
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'Ionicons':
        return (
          <Ionicons
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'MaterialCommunityIcons':
        return (
          <MaterialCommunityIcons
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'MaterialIcons':
        return (
          <MaterialIcons
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'SimpleLineIcons':
        return (
          <SimpleLineIcons
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'Octicons':
        return (
          <Octicons
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'Zocial':
        return (
          <Zocial
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
              loading && {transform: [{rotate}]},
            ]}
            {...props}
          />
        );
      case 'SVG':
        return (
          <>
            {React.cloneElement(icons[props.name], {
              width: props.size,
              height: props.size,
              fill: props.color,
              stroke: props.stroke || props.color,
              style,
            })}
          </>
        );
      default:
        return (
          <AntDesign
            style={[
              !label && !onPress && style,
              role === 'button' && styles.center,
            ]}
            {...props}
          />
        );
    }
  }, [label, onPress, props, role, rotate, loading, style, type]);

  if (role === 'button') {
    return (
      <Ripple
        rippleContainerBorderRadius={24}
        style={[
          styles.ripple,
          {backgroundColor: !!background ? background : theme.icon.background},
          style,
        ]}
        onPress={onPress}
        {...props}>
        {icon()}
      </Ripple>
    );
  }

  if (onPress) {
    return (
      <TouchableOpacity style={style} onPress={onPress} {...props}>
        {icon()}
      </TouchableOpacity>
    );
  }
  if (label) {
    return (
      <View style={[styles.row, style]}>
        {icon()}
        <Text
          style={[
            styles.label,
            {color: theme.icon.label, fontSize: theme.text.s11},
          ]}>
          {label}
        </Text>
      </View>
    );
  }

  return <>{icon()}</>;
};

export default Icon;

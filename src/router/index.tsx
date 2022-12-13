import React, {useCallback, useState} from 'react';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {TabItem} from '../resources/interfaces/items/tabItem';
import {navigationRef} from '../navigation';
import Icon from '../components/Icon';
import Home from '../screens/Content/Home';
import {getByScreenSize} from '../utils/responsive';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, Platform, View} from 'react-native';
import {StackItem} from '../resources/interfaces/items/stackItem';
import GenericText from '../components/GenericText';
import {tr} from '../resources/translations';
import transitions from './transitions';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const tabsScreens: TabItem[] = [
  {
    id: 0,
    name: 'home',
    component: Home,
    icon: (color, size) => (
      <Icon type={'AntDesign'} name={'home'} color={color} size={size} />
    ),
  },
  {
    id: 1,
    name: 'orders',
    component: Home,
    icon: (color, size) => (
      <Icon type={'AntDesign'} name={'tago'} color={color} size={size} />
    ),
  },
  {
    id: 2,
    name: 'favorite',
    component: Home,
    icon: (color, size) => (
      <Icon type={'AntDesign'} name={'hearto'} color={color} size={size} />
    ),
  },
  {
    id: 3,
    name: 'cart',
    component: Home,
    icon: (color, size) => (
      <Icon type={'SVG'} name={'cart'} color={color} size={size} />
    ),
  },
  {
    id: 3,
    name: 'profile',
    component: Home,
    icon: (color, size) => (
      <Icon type={'Octicons'} name={'person'} color={color} size={size} />
    ),
  },
];

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#C500FF',
        tabBarInactiveTintColor: '#222222',
      }}>
      {tabsScreens.map((screen, idx) => (
        <Tabs.Screen
          key={`tabScreen${idx}`}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            ...transitions.RightToLeft,
            tabBarLabel: tr('tabs.' + `${screen.name}`),
            tabBarLabelStyle: {fontSize: getByScreenSize(13, 25)},
            tabBarIcon: ({focused}) =>
              screen.icon(
                focused ? '#C500FF' : '#222222',
                getByScreenSize(20, 25),
              ),
            tabBarStyle: {height: getByScreenSize(50, 80)},
          }}
        />
      ))}
    </Tabs.Navigator>
  );
};
const screens: StackItem[] = [
  {
    id: 0,
    name: 'homeTabs',
    component: HomeTabs,
  },
];
const AppNavigator = () => {
  const [router, setRouter] = useState<string>('home');
  const selectRouter = useCallback(() => {
    if (router === 'home') {
      return (
        <Stack.Navigator
          screenOptions={{gestureEnabled: Platform.OS === 'ios'}}>
          <Stack.Group>
            {screens.map((screen, idx) => (
              <Stack.Screen
                key={idx}
                options={{
                  headerShown: false,
                }}
                name={screen.name}
                component={screen.component}
              />
            ))}
          </Stack.Group>
        </Stack.Navigator>
      );
    }
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator color={'#C500FF'} size={'large'} />
        <GenericText>Loading...</GenericText>
      </View>
    );
  }, [router]);

  return (
    <NavigationContainer ref={navigationRef}>
      {selectRouter()}
    </NavigationContainer>
  );
};
export default AppNavigator;

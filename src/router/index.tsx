import React, {useCallback, useState} from 'react';
import {TabItem} from '../resources/interfaces/items/tabItem';
import Icon from '../components/Icon';
import Home from '../screens/Content/Home';
import {getByScreenSize, hdp} from '../utils/responsive';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, Platform, View} from 'react-native';
import {StackItem} from '../resources/interfaces/items/stackItem';
import GenericText from '../components/GenericText';
import {tr} from '../resources/translations';
import transitions from './transitions';
import ProductDetails from '../screens/Content/ProductDetails';
import Cart from '../screens/Content/Cart';
import Profile from '../screens/Content/Profile';
import PrivacyPolicy from '../screens/Content/PrivacyPolicy';
import Favorite from '../screens/Content/Favorite';
import Orders from '../screens/Content/Order/Orders';
import ProductReview from '../screens/Content/ProductReview';
import WriteReview from '../screens/Content/WriteReview';
import PlaceOrder from '../screens/Content/Order/PlaceOrder';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import UpdateProfile from '../screens/Content/UpdateProfile';
import Splash from '../screens/Content/Splash';
import ImageViewer from '../screens/Content/ImageViewer';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {colors} from '../resources/theme/colors';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const tabsScreens: TabItem[] = [
  {
    id: 0,
    name: 'home',
    component: Home,
    icon: (color, size) => (
      <Icon type={'FontAwesome5'} name={'home'} color={color} size={size} />
    ),
  },
  {
    id: 1,
    name: 'orders',
    component: Orders,
    icon: (color, size) => (
      <Icon type={'AntDesign'} name={'tag'} color={color} size={size} />
    ),
  },
  {
    id: 2,
    name: 'favorite',
    component: Favorite,
    icon: (color, size) => (
      <Icon type={'AntDesign'} name={'heart'} color={color} size={size} />
    ),
  },
  {
    id: 3,
    name: 'cart',
    component: Cart,
    icon: (color, size) => (
      <Icon
        type={'MaterialIcons'}
        name={'shopping-cart'}
        color={color}
        size={size}
        style={{marginRight: getByScreenSize(0, 0)}}
      />
    ),
  },
  {
    id: 3,
    name: 'profile',
    component: Profile,
    icon: (color, size) => (
      <Icon type={'Octicons'} name={'person-fill'} color={color} size={size} />
    ),
  },
];
const HomeTabs = () => {
  const theme = useTheme();
  const cart = useSelector(state => state.cart);
  const {cartList} = cart;
  return (
    <Tabs.Navigator
      screenOptions={
        {
          // tabBarActiveTintColor: '#C500FF',
          // tabBarInactiveTintColor: '#222222',
        }
      }>
      {tabsScreens.map((screen, idx) => (
        <Tabs.Screen
          key={`tabScreen${idx}`}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            ...transitions.RightToLeft,
            tabBarLabel: ({focused}) => (
              <GenericText
                style={{
                  color: focused ? colors.secondary : colors.fourthly,
                  fontSize: getByScreenSize(13, 25),
                  fontWeight: '600',
                  marginLeft: getByScreenSize(0, 20),
                }}>
                {tr('tabs.' + `${screen.name}`)}
              </GenericText>
            ),
            tabBarIcon: ({focused}) =>
              screen.icon(
                focused ? colors.secondary : colors.fourthly,
                getByScreenSize(20, 25),
              ),
            tabBarBadge:
              screen.name === 'cart' && !!cartList && cartList.length
                ? cartList.length
                : '',
            tabBarBadgeStyle: {
              borderRadius: getByScreenSize(8, 13),
              width: getByScreenSize(16, 26),
              height: getByScreenSize(16, 26),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                screen.name === 'cart' && !!cartList && cartList.length
                  ? colors.primary
                  : 'transparent',
              color:
                screen.name === 'cart' && !!cartList && cartList.length
                  ? '#FFFFFF'
                  : 'transparent',
              fontSize: theme.text.s11,
              position: 'absolute',
              right: getByScreenSize(30, 50),
              top: getByScreenSize(0, 20),
            },
            tabBarItemStyle: {
              justifyContent: 'flex-start',
              marginHorizontal: '3%',
            },
            tabBarStyle: {
              height: hdp(getByScreenSize(7, 10)),
              paddingBottom: '2%',
              paddingTop: '1%',
            },
          }}
        />
      ))}
    </Tabs.Navigator>
  );
};
const screens: StackItem[] = [
  {
    id: 0,
    name: 'splash',
    component: Splash,
  },
  {
    id: 1,
    name: 'homeTabs',
    component: HomeTabs,
  },
  {
    id: 2,
    name: 'productDetails',
    component: ProductDetails,
  },
  {
    id: 3,
    name: 'imageViewer',
    component: ImageViewer,
  },
  {
    id: 4,
    name: 'productReview',
    component: ProductReview,
  },
  {
    id: 5,
    name: 'writeReview',
    component: WriteReview,
  },
  {
    id: 6,
    name: 'updateProfile',
    component: UpdateProfile,
  },
  {
    id: 7,
    name: 'privacyPolicy',
    component: PrivacyPolicy,
  },
  {
    id: 8,
    name: 'placeOrder',
    component: PlaceOrder,
  },
  {
    id: 9,
    name: 'signIn',
    component: SignIn,
  },
  {
    id: 10,
    name: 'signUp',
    component: SignUp,
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
        <ActivityIndicator color={colors.primary} size={'large'} />
        <GenericText>Loading...</GenericText>
      </View>
    );
  }, [router]);

  return selectRouter();
};
export default AppNavigator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import lightTheme from './resources/theme/lightTheme';
import AppNavigator from './router';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation';
import {Platform, StatusBar, UIManager} from 'react-native';
import {keys} from './api/keys';
import {getLocalData} from './utils/storage';
import {saveCartList} from './screens/Content/Cart/action';
import GlobalModal from './connected-components/Modal';
import {setAuthStatus} from './screens/Auth/SignIn/action';
import {saveFavoriteList} from './screens/Content/Favorite/action';
import {setUserStatus} from './screens/Auth/SignUp/action';

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;
const App = () => {
  const copyDataFromLocalToReducer = async () => {
    let cartList = await getLocalData(keys.CART);
    saveCartList(!cartList ? [] : cartList);
    let favoriteList = await getLocalData(keys.FAVORITE);
    saveFavoriteList(!favoriteList ? [] : favoriteList);
    let logged = await getLocalData(keys.AUTH);
    setAuthStatus(logged ? logged : {logged: false});
    let user = await getLocalData(keys.USER);
    setUserStatus(
      user
        ? user
        : {
            personalInfo: {
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              mobile: '',
              profileImage: null,
            },
          },
    );
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
    copyDataFromLocalToReducer().then();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={lightTheme}>
        <StatusBar
          animated={true}
          backgroundColor={'#d4a2be'}
          barStyle={STYLES[2]}
          showHideTransition={TRANSITIONS[0]}
          hidden={false}
        />
        <AppNavigator />
        <GlobalModal />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

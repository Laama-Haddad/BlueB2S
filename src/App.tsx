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
import {Platform, UIManager} from 'react-native';
import {keys} from './api/keys';
import {getLocalData} from './utils/storage';
import {saveCartList} from './screens/Content/Cart/action';
import GlobalModal from "./connected-components/Modal";

const App = () => {
  const copyDataFromLocalToReducer = async () => {
    let cartList = await getLocalData(keys.CART);
    saveCartList(!cartList ? [] : cartList);
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
        <AppNavigator />
        <GlobalModal />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

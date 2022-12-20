/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import lightTheme from './resources/theme/lightTheme';
import AppNavigator from './router';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={lightTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

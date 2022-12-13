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
import {ThemeProvider} from '@react-navigation/native';
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

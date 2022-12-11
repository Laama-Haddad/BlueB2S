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
import MainLayout from './screens/MainLayout';

import lightTheme from './resources/theme/lightTheme';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer theme={lightTheme}>
      <MainLayout
        backHeader
        showLogo
        title={'Profile'}
        onBackIconPress={() => console.log('fdsj')}
      />
    </NavigationContainer>
  );
};

export default App;

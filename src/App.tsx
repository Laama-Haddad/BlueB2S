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

const App = () => {
  return (
    <MainLayout
      tabHeader
      showLogo
      title={'Profile'}
      backgroundColor={'blue'}
      onBackIconPress={() => console.log('fdsj')}
    />
  );
};

export default App;

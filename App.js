import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PublicNavigator } from './src/components/lib/appNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <PublicNavigator />
  </NavigationContainer>
  );
}

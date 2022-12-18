import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import Signup from './components/Signup';
import Login from './components/Login';
import Tab from './components/Tab';

// or any pure javascript modules available in npm
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Tab" component={Tab} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


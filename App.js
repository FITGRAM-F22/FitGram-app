import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import Login from './components/Login';
import Tab from './components/Tab';
import Camera from './components/Camera';
import Friends from './components/Friends';
import Filters from './components/Filters';
import CreateEvent from './components/CreateEvent';

// or any pure javascript modules available in npm
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Tab" component={Tab} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: true }}></Stack.Screen>
        <Stack.Screen name="Friends" component={Friends} options={{ headerShown: true }}></Stack.Screen>
        <Stack.Screen name="Filters" component={Filters} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="CreateEvent" component={CreateEvent} options={{ headerShown: true }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


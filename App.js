
import * as React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons'; 

// You can import from local files
import Login from './components/Login';
import Tab from './components/Tab';
import CreatePost from './components/CreatePost';
import Friends from './components/Friends';
import Filters from './components/Filters';
import CreateEvent from './components/CreateEvent';
import { useNavigation } from '@react-navigation/native';

// or any pure javascript modules available in npm
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Tab" component={Tab} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="CreatePost" component={CreatePost} options={({navigation}) => ({ 
          title: "Outfit of the Day", 
          headerShown: true, 
          headerLeft: () => <Button title="  Cancel" onPress={() => navigation.navigate("Tab")}/>,
          headerRight: () => <Button title="Save " onPress={() => navigation.navigate("Tab")}/>
        })}></Stack.Screen>
        <Stack.Screen name="Friends" component={Friends} options={({navigation}) => ({ 
          title: "Add Friends", 
          headerShown: true, 
          headerLeft: () => 
          <TouchableOpacity style={{marginLeft: 16}} onPress={() => navigation.navigate("Tab")}>
            <Feather name="arrow-left" size={28} color="black" /></TouchableOpacity>,
        })}>
        </Stack.Screen>
        <Stack.Screen name="Filters" component={Filters} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="CreateEvent" component={CreateEvent} options={({navigation}) => ({ 
          title: "Create Event", 
          headerShown: true, 
          headerLeft: () => <Button title="  Cancel" onPress={() => navigation.navigate("Tab")}/>,
          headerRight: () => <Button title="Save " onPress={() => navigation.navigate("Tab")}/>
        })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
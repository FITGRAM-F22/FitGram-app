import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import Fits from './Fits';
import Event from './Events';

function Ootd() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Feed!</Text> */}
      <Fits></Fits>
    </View>
  );
}

function Events() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Events!</Text> */}
      <Event></Event>
    </View>
  );
}

function Closet() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Closet!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Ootd"
      screenOptions={{
        tabBarActiveTintColor: '#000',
      }}
    >
      <Tab.Screen
        name="Ootd"
        component={Ootd}
        options={{
          tabBarLabel: 'Ootd',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="progress-clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Closet"
        component={Closet}
        options={{
          tabBarLabel: 'Closet',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="event" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return (
    <MyTabs />
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
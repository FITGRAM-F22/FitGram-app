import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import Fits from './Fits';
import Closet from './Closet';
import Events from './Events';

function TodaysFitsComponent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Fits></Fits>
    </View>
  );
}

function ClosetComponent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Closet></Closet>
    </View>
  );
}

function EventsComponent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Events></Events>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Today's Fits"
      screenOptions={{
        tabBarActiveTintColor: '#000',
      }}
    >
      <Tab.Screen
        name="Today's Fits"
        component={TodaysFitsComponent}
        options={{
          tabBarLabel: 'Today\'s Fits',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="progress-clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Closet"
        component={ClosetComponent}
        options={{
          tabBarLabel: 'Closet',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsComponent}
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
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import Fits from './Fits';
import Closet from './Closet';
import Events from './Events';
import { useNavigation } from '@react-navigation/native';

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
  const nav = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Today's Fits"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarLabelStyle: {
          marginBottom: 4,
        },
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
          headerLeft: () => (
            <TouchableOpacity onPress={() => nav.navigate('Camera')}>
              <Feather name="camera" size={28} color="black" style={{marginLeft: 24}}/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('This is a button!')}>
              <MaterialIcons name="group" size={28} color="black" style={{marginRight: 24}}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Closet"
        component={ClosetComponent}
        options={{
          tabBarLabel: 'My Closet',
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
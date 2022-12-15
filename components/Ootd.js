import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Ootd() {
  const BottomTab = createBottomTabNavigator();

  const FeedScreen = () => (
    <View style={styles.layout}>
      <Text style={styles.title}>Feed</Text>
    </View>
  );

  const CatalogScreen = () => (
    <View style={styles.layout}>
      <Text style={styles.title}></Text>
    </View>
  );

  return (
    <View style={styles.layout}>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Feed" component={FeedScreen} />
        <BottomTab.Screen name="Catalog" component={CatalogScreen} />
      </BottomTab.Navigator>          
    </View>
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
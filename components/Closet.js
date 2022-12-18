import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather, FontAwesome5, MaterialIcons} from '@expo/vector-icons'; 

export default function Closet() {
  return (
    <View style={styles.closet}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
            <Ionicons name="person" size={20}/> 
            <Text style={styles.usernametext}>{'  '}Username</Text>
          </TouchableOpacity>
          <View style={styles.icons}>
            <Ionicons name="filter" size={32} color="black" /> 
            <Text>{'   '}</Text>
            <Ionicons name="settings-sharp" size={32} color="black" />
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.icons}>
            <Feather name="camera" size={32} color="black" />            
            <Text>{'    '}</Text>
            <FontAwesome5 name="calendar-alt" size={32} color="black" />
          </View>
          <TouchableOpacity style={[styles.streak, styles.shadow]} onPress={null}>
            <MaterialIcons name="hourglass-bottom" size={20} color="black" />
            <Text style={styles.usernametext}>{'  '}22 DAY STREAK</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  closet: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  scrollview: {
    width: "100%",
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icons: {
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  usernamebutton: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderRadius: 32,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  usernametext: { 
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  streak: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderRadius: 32,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
  }
});
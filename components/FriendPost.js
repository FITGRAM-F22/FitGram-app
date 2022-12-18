import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'; 

export default function Post() {
  return (
    <View style={styles.post}>
      <TouchableOpacity style={[styles.usernamebutton, styles.shadowProp]} onPress={null}>
          <Ionicons name="person" size={20}/> 
          <Text style={styles.usernametext}>{'  '}Username</Text>
        </TouchableOpacity> 
      <View style={styles.centered}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={styles.tags}>
          <View style={[styles.shadowProp, styles.tag]}>
            <MaterialCommunityIcons name="briefcase-outline" size={14}/>
            <Text>{'  '}Style</Text>
          </View>
          <View style={[styles.shadowProp, styles.tag]}>
            <Ionicons name="md-globe-outline" size={14}/>
            <Text>{'  '}Activity</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
  },
  shadowProp: {
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
    marginLeft: 24,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  centered: {
    alignItems: 'center',
  },
  usernametext: { 
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  image: {
    width: 250,
    height: 250,
  },
  tags: {
    marginBottom: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tag: {
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
  }
});
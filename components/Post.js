import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';

export default function Post() {
  return (
    <View style={styles.fits}>
      <TouchableOpacity style={styles.usernamebutton} onPress={null}>
            <Text style={styles.usernametext}>Username</Text>
        </TouchableOpacity> 
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.tag}>Style</Text>
       <Text style={styles.tag}>Activity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fits: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  usernamebutton: {
    alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 16,
    backgroundColor: '#000',
    borderRadius: 32,
    marginBottom: 8,
  },
  usernametext: { 
    fontSize: 16,
    color: '#FFF'
  },
  image: {
    width: 200,
    height: 200,
  },
  tag: {
  }
});
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Post from './Post';

export default function Fits() {
  return (
    <View style={styles.fits}>
      {/* <Text style={styles.header}>Today's Fits</Text> */}
      <Post/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  fits: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 40,
    borderBottomColor: '#000',
    borderBottomWidth: 5,
  }
});
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Post from './Post';

export default function Fits() {
  return (
      <View style={styles.view}>
        <ScrollView style={styles.scroll_view}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  scroll_view: {
    width: "100%"
  },
  view: {
    backgroundColor: '#fff',
    flex: 1,
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
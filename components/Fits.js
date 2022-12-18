import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FriendPost from './FriendPost';
import MyPost from './MyPost';

export default function Fits() {
  return (
    <View style={styles.view}>
        <ScrollView style={styles.scroll_view}>
          <MyPost />
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
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
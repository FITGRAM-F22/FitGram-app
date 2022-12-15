import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const nav = useNavigation();

  return (
    <View style={styles.signup}>
        <Text style={styles.header}>FITGRAM</Text>
        <TextInput style={styles.textinput} placeholder="Email"></TextInput>
        <TextInput style={styles.textinput} placeholder="Password" secureTextEntry></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('Tab')}>
            <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  signup: {
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
  },
  textinput: {
    height: 40,
    fontSize: 20,
    marginBottom: 30,
    color: '#000',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 16,
    backgroundColor: '#000',
    marginTop: 8,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
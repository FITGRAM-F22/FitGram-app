import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
    const nav = useNavigation();

  return (
    <View style={styles.signup}>
        <Text style={styles.header}>FITGRAM</Text>
        <TextInput style={styles.textinput} placeholder="First Name"></TextInput>
        <TextInput style={styles.textinput} placeholder="Last Name"></TextInput>
        <TextInput style={styles.textinput} placeholder="Email"></TextInput>
        <TextInput style={styles.textinput} placeholder="Password" secureTextEntry></TextInput>
        <TextInput style={styles.textinput} placeholder="Confirm Password" secureTextEntry></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('Login')}>
            <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
        {/* <Button title="Sign Up" onPress={() => nav.navigate('Catalog')} /> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch' // check on what this does
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
    // alignSelf: 'stretch',
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

import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const nav = useNavigation();

  return (
    <View style={styles.signup}>
        <Text style={styles.header}>FITGRAM</Text>
        <View style={styles.logos}>
          <Image style={styles.logo} source={require("../assets/google.png")}/>
          <Image style={styles.logo} source={require("../assets/facebook.png")}/>
        </View>
        <Text style={styles.or}>- or -</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.inputtext} placeholder="" onChangeText={null}/>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.inputtext} placeholder="" secureTextEntry onChangeText={null}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => nav.navigate('Tab')}>
            <Text style={styles.btntext}>LOGIN</Text>
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
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 40,
    fontStyle: 'italic',
    marginBottom: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 5,
  },
  logos: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  or: {
    fontSize: 20,
    fontFamily: 'System',
    color: '#A9A9A9',
  },
  form: {
    alignItems: 'flex-start'
  },
  label: {
    marginTop: 10,
    color: '#A9A9A9',
  },
  inputtext: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 10,
    marginVertical: 7,
  },
  button: {
    alignItems: 'center',
    paddingTop: 12,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 12,
    backgroundColor: '#000',
    borderRadius: 30,
    marginTop: 20,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
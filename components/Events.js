import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Events() {
  return (
    <View style={styles.container}>
      <View style={styles.firstheader}>
        <Text style={styles.text}>
          Your friends need help choosing their outfits for upcoming events! Vote 
          and comment on which fits they should slay in.
        </Text>
        <View style={styles.icons}> 
          <FontAwesome5 name="calendar-alt" size={32} color="black" />
          <Text>{'   '}</Text>
        </View>
      </View>
      
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  firstheader: {
    flexDirection: 'row',
    marginTop: 18,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: { 
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 30,
  },
})
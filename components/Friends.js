import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'; 

export default function Friends() {
    return (
      <View style={styles.friends}>
        <View style={styles.search}>
          <Ionicons name="search" size={20} color="#A9A9A9" />
          <TextInput style={styles.searchtextinput} placeholder='Add or search friends' onChangeText={null}/>
        </View>
        <Text style={styles.instructions}>ADD FROM YOUR CONTACTS</Text>
        <View style={styles.row}>
          <Ionicons name="person" size={30}/> 
          <Text style={[styles.regtext, styles.username]}>IMJACKIEOFFICIAL</Text>
          <TouchableOpacity style={styles.addbtn} onPress={null}>
            <Text style={styles.regtext}>ADD</Text>
          </TouchableOpacity>  
          <Entypo style={styles.closebtn} name="cross" size={30} color="black" />
        </View>
        <View style={styles.row}>
          <Ionicons name="person" size={30}/> 
          <Text style={[styles.regtext, styles.username]}>NEHAJANNUUUUU</Text>
          <TouchableOpacity style={styles.addbtn} onPress={null}>
            <Text style={styles.regtext}>ADD</Text>
          </TouchableOpacity>  
          <Entypo style={styles.closebtn} name="cross" size={30} color="black" />
        </View>
        <View style={styles.row}>
          <Ionicons name="person" size={30}/> 
          <Text style={[styles.regtext, styles.username]}>ALEXSHMALEX{'       '}</Text>
          <TouchableOpacity style={styles.addbtn} onPress={null}>
            <Text style={styles.regtext}>ADD</Text>
          </TouchableOpacity>  
          <Entypo style={styles.closebtn} name="cross" size={30} color="black" />
        </View>
        <View style={styles.row}>
          <Ionicons name="person" size={30}/> 
          <Text style={[styles.regtext, styles.username]}>HANNAHBANANA{'  '}</Text>
          <TouchableOpacity style={styles.addbtn} onPress={null}>
            <Text style={styles.regtext}>ADD</Text>
          </TouchableOpacity>  
          <Entypo style={styles.closebtn} name="cross" size={30} color="black" />
        </View>
        <View style={styles.options}>
          <View style={styles.suggestions}>
            <Text style={styles.regtext}>SUGGESTIONS</Text>
          </View>
          <Text style={styles.regtext}>FRIENDS</Text>
          <Text style={styles.regtext}>REQUESTS</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  friends: {
      flex: 1,
      backgroundColor: '#FFF',
      padding: 20,
  },
  search: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#A9A9A9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 10,
  },
  searchtextinput: {
    marginLeft: 10,
    fontSize: 16,
  },
  instructions: {
    marginVertical: 10,
    marginLeft: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  addbtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
  },
  regtext: {
    fontSize: 15,
    fontWeight: '600',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 7,
    marginTop: 50,
    marginHorizontal: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 14,
  },
  suggestions: {
    padding: 10,
    backgroundColor: '#EBEAEA',
    borderRadius: 9,
  }
});
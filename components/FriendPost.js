import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Foundation} from '@expo/vector-icons'; 

export default function FriendPost() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View style={styles.post}>
      <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
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
        <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
          <View style={styles.tags}>
            <View style={[styles.shadow, styles.tag]}>
              <MaterialCommunityIcons name="briefcase-outline" size={14}/>
              <Text>{'  '}Style</Text>
            </View>
            <View style={[styles.shadow, styles.tag]}>
              <Ionicons name="md-globe-outline" size={14}/>
              <Text>{'  '}Activity</Text>
            </View>
          </View>
          {showDescription && <View style={[styles.shadow, styles.commenttag]}>
              <Foundation name="page" size={14} color="black" />
              <Text>{'  '}Description</Text>
          </View>}
        </TouchableOpacity>
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
  shadow: {
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
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tag: {
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    marginTop: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
  },
  commenttag: {
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    marginBottom: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
  }
});
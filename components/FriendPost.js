import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Foundation} from '@expo/vector-icons'; 

export default function FriendPost({image, username, style, activity, description}) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.centered}>
        <Image style={styles.image} source={image}/>
        <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
          <Ionicons name="person" size={20}/> 
          <Text style={styles.usernametext}>{'  '}{username}</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.alltags} onPress={() => setShowDescription(!showDescription)}>
            <View style={styles.maintags}>
              <View style={[styles.shadow, styles.tag]}>
                <MaterialCommunityIcons name="briefcase-outline" size={14}/>
                <Text style={styles.regtext}>{style}</Text>
              </View>
              <View style={[styles.shadow, styles.tag]}>
                <Ionicons name="md-globe-outline" size={14}/>
                <Text style={styles.regtext}>{activity}</Text>
              </View>
            </View>
            {showDescription && <View style={[styles.shadow, styles.descriptiontag]}>
                <Foundation name="page" size={14} color="black" />
                <Text style={styles.regtext}>{description}</Text>
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
    alignItems: 'center',
    marginTop: -270,
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
  alltags: {
    marginTop: 225,
    marginBottom: 30,
  },
  maintags: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tag: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    alignSelf: 'flex-start',
  },
  descriptiontag: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 14,
    paddingRight: 12,
    marginBottom: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 300,
  },
  regtext: {
    marginLeft: 10,
  }
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import GridImageView from 'react-native-grid-image-viewer';
import { useNavigation } from '@react-navigation/native';
import {Asset} from 'expo-asset';
import Settings from './Settings';

export default function Closet() {
  const nav = useNavigation();

  const photo1URI = Asset.fromModule(require('../assets/fashion/closetPhoto1.png')).uri;
  const photo2URI = Asset.fromModule(require('../assets/fashion/closetPhoto2.png')).uri;
  const photo3URI = Asset.fromModule(require('../assets/fashion/closetPhoto3.png')).uri;
  const photo4URI = Asset.fromModule(require('../assets/fashion/closetPhoto4.png')).uri;
  const photo5URI = Asset.fromModule(require('../assets/fashion/closetPhoto5.png')).uri;
  const photo6URI = Asset.fromModule(require('../assets/fashion/closetPhoto6.png')).uri;
  const photo7URI = Asset.fromModule(require('../assets/fashion/closetPhoto7.png')).uri;
  const photo8URI = Asset.fromModule(require('../assets/fashion/closetPhoto8.png')).uri;
  const photo9URI = Asset.fromModule(require('../assets/fashion/closetPhoto9.png')).uri;
  const photo10URI = Asset.fromModule(require('../assets/fashion/closetPhoto10.png')).uri;
  const photo11URI = Asset.fromModule(require('../assets/fashion/closetPhoto11.png')).uri;
  const photo12URI = Asset.fromModule(require('../assets/fashion/closetPhoto12.png')).uri;

  const photos = [photo1URI, photo2URI, photo3URI, photo4URI, photo5URI, photo6URI, photo7URI, photo8URI, photo9URI, photo10URI, photo11URI, photo12URI]

  const [showSettings, setShowSettings] = useState(false);

  return (
    <View style={styles.closet}>
      <View style={styles.firstheader}>
        <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
          <Ionicons name="person" size={20}/> 
          <Text style={styles.usernametext}>{'  '}MAGGIESWIFTIE</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => nav.navigate('Filters')}>
            <Ionicons name="filter" size={32} color="black" /> 
          </TouchableOpacity>
          <Text>{'   '}</Text>
          <TouchableOpacity onPress={() => setShowSettings(!showSettings)}>
            <Ionicons name="settings-sharp" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondheader}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => nav.navigate('CreatePost')}>
            <Feather name="camera" size={32} color="black" />   
          </TouchableOpacity>
          <Text>{'    '}</Text>
          <TouchableOpacity onPress={() => nav.navigate('CreateEvent')}>
            <FontAwesome5 name="calendar-alt" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.streak, styles.shadow]} onPress={null}>
          <MaterialIcons name="hourglass-bottom" size={20} color="black" />
          <Text style={styles.usernametext}>{'  '}12 DAY STREAK</Text>
        </TouchableOpacity>
      </View>
      <GridImageView data={photos} />
      {showSettings && <Settings setShowSettings={setShowSettings}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  closet: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  scrollview: {
    width: "100%",
  },
  firstheader: {
    flexDirection: 'row',
    marginTop: 18,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  secondheader: {
    flexDirection: 'row',
    marginVertical: 18,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icons: {
    flexDirection: 'row',
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  usernametext: { 
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  streak: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderRadius: 32,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
  }, 
  settings: {
    height: 500,
    width: 200,
    backgroundColor: '#FFF',
    marginTop: -850,
    marginRight: 40,
    alignSelf: 'flex-end',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
});
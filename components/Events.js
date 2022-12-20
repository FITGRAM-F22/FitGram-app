import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { faker } from '@faker-js/faker';

export default function Events() {
  const { width } = Dimensions.get('window');
  const image = { uri: 'https://reactnative.dev/img/tiny_logo.png' };

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
      <View style={styles.secondheader}>
        <View>
          <Text>{'    '}</Text>
          <Text style={styles.textheader}>My Events</Text>
          <ScrollView horizontal>
            <View style={[styles.card1, styles.shadowProp]}>
              <View>
                <Text style={styles.heading}>
                  React Native Box Shadow (Shadow Props)
                </Text>
              </View>
              <Image
                source={image}
                style={styles.image}
              />
            </View>
            <View style={[styles.card1, styles.shadowProp]}>
              <View>
                <Text style={styles.heading}>
                  React Native Box Shadow (Shadow Props)
                </Text>
              </View>
              <Image
                source={image}
                style={styles.image}
              />
            </View>
            <View style={[styles.card1, styles.shadowProp]}>
              <View>
                <Text style={styles.heading}>
                  React Native Box Shadow (Shadow Props)
                </Text>
              </View>
              <Image
                source={image}
                style={styles.image}
              />
            </View>
            <View style={[styles.card1, styles.shadowProp]}>
              <View>
                <Text style={styles.heading}>
                  React Native Box Shadow (Shadow Props)
                </Text>
              </View>
              <Image
                source={image}
                style={styles.image}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      
      <View style={styles.thirdheader}>
        <View>
          <Text>{'    '}</Text>
          <Text style={styles.textheader}>Friends' Events</Text>
            <View style={[styles.card2, styles.shadowProp]}>
              <View>
                <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
                    <Ionicons name="person" size={20}/> 
                    <Text style={styles.usernametext}>{'  '}Username</Text>
                </TouchableOpacity>
              </View>
              <Text>
                Using the elevation style prop to apply box-shadow for iOS devices
              </Text>
            </View>
            <View style={[styles.card2, styles.shadowProp]}>
              <View>
                <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
                  <Ionicons name="person" size={20}/> 
                  <Text style={styles.usernametext}>{'  '}Username</Text>
                </TouchableOpacity>
              </View>
              <Text>
                Homecomingggggg
              </Text>
            </View>
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
  secondheader: {
    flexDirection: 'row',
    marginVertical: 18,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textheader: {
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginHorizontal: 30,
  },
  thirdheader: {
    flexDirection: 'row',
    marginVertical: 18,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card1: {
    height: 160,
    width: 150,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#a9a9a9'
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  card2: {
    height: 120,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 10,
    borderColor: '#a9a9a9',
    width: '90%',
    marginLeft: 20,
    marginHorizontal: 30,
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
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginLeft: 25
  }
})
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Events() {
  const { width } = Dimensions.get('window');

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
      <ScrollView>
        <View style={styles.secondheader}>
          <View>
            <Text>{'    '}</Text>
            <Text style={styles.textheader}>My Events</Text>
            <ScrollView horizontal>
              <View style={[styles.card1, styles.shadowProp]}>
                <View>
                  <Text style={styles.title}>
                    Spring sem...
                  </Text>
                </View>
                <Image
                  source={require("../assets/fashion/eventPhoto1.png")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.card1, styles.shadowProp]}>
                <View>
                  <Text style={styles.title}>
                    Office happy hour
                  </Text>
                </View>
                <Image
                  source={require("../assets/fashion/eventPhoto2.png")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.card1, styles.shadowProp]}>
                <View>
                  <Text style={styles.title}>
                    Brunch picnic
                  </Text>
                </View>
                <Image
                  source={require("../assets/fashion/eventPhoto3.png")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.card1, styles.shadowProp]}>
                <View>
                  <Text style={styles.title}>
                    Kwanzaa Ball
                  </Text>
                </View>
                <Image
                  source={require("../assets/fashion/eventPhoto4.png")}
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
            <ScrollView>
              <View style={[styles.card2, styles.shadowProp]}>
                <View style={styles.friendscontent}>
                  <View>
                    <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
                      <Ionicons name="person" size={20}/> 
                      <Text style={styles.usernametext}>{'  '}MAY193</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                      Halloween party
                    </Text>
                    <Text style={styles.caption}>
                      racecar driver or queen...
                    </Text>
                  </View>
                  <View>
                    <Image
                    source={require("../assets/fashion/eventPhoto6.png")}
                    style={styles.friendsimage}
                    />
                  </View>
                  <View>
                    <Image
                    source={require("../assets/fashion/eventPhoto7.png")}
                    style={styles.friendsimage}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.card2, styles.shadowProp]}>
                <View style={styles.friendscontent}>
                  <View>
                    <TouchableOpacity style={[styles.usernamebutton, styles.shadow]} onPress={null}>
                      <Ionicons name="person" size={20}/> 
                      <Text style={styles.usernametext}>{'  '}FRANFRAN</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>
                      Homecominggg
                    </Text>
                    <Text style={styles.caption}>
                      Which shirt should I w...
                    </Text>
                  </View>
                  <View>
                    <Image
                    source={require("../assets/fashion/eventPhoto8.png")}
                    style={styles.friendsimage}
                    />
                  </View>
                  <View>
                    <Image
                    source={require("../assets/fashion/eventPhoto9.png")}
                    style={styles.friendsimage}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 18,
    fontStyle: 'italic',
    padding: 10
  },
  caption: {
    paddingLeft: 10,
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
    marginTop: 1,
    marginLeft: 25
  },
  friendscontent: {
    flexDirection: 'row',
  },
  friendsimage: {
    width: 50,
    height: 50,
    padding: 40,
    margin: 10,
  }
})
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import FriendPost from './FriendPost';
import MyPost from './MyPost';
import Modal from "react-native-modal";
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Fits() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const nav = useNavigation();

  return (
    <View style={styles.view}>
        <ScrollView style={styles.scrollview}>
          <Button title="Show modal" onPress={toggleModal} />

          <Modal isVisible={isModalVisible}>
            <View style={styles.modal}>
              <View style={styles.modalheader}>
                <Text style={styles.modaltext}>DAILY FIT CHECK</Text>
                <Text>{'    '}</Text>
                <TouchableOpacity onPress={toggleModal}>
                  <Entypo name="cross" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <Text>Take a mirror selfie or upload your outfit from this morning to save your best dressed looks for later</Text>
              <View style={styles.modalbuttons}>
                <TouchableOpacity onPress={() => nav.navigate('Camera')}><Text style={styles.modaltext}>TAKE PHOTO</Text></TouchableOpacity>
                <Text>{'    '}</Text>
                <TouchableOpacity onPress={() => nav.navigate('Camera')}><Text style={styles.modaltext}>UPLOAD</Text></TouchableOpacity>
              </View>
            </View>
          </Modal>

          <MyPost />
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    width: "100%"
  },
  modal: {
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 200,
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  modalheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalbuttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  modaltext: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  view: {
    backgroundColor: '#fff',
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
  }
});
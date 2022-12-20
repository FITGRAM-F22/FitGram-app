import React, {useState} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import FriendPost from './FriendPost';
import MyPost from './MyPost';
import DailyModal from './DailyModal';

export default function Fits() {
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.view}>
        <ScrollView style={styles.scrollview}>
          <DailyModal setModalVisible={setModalVisible} isModalVisible={isModalVisible}/>
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
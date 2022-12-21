import React, {useState} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import FriendPost from './FriendPost';
import MyPost from './MyPost';
import DailyModal from './DailyModal';

export default function Fits() {
  const [isModalVisible, setModalVisible] = useState(true);

  const myInfo = [require("../assets/fashion/myPhoto.png"), "athleisure", "movie night", "watched some movies with friends and just wanted some comfy jeans"]

  const friendInfo = [
    [require("../assets/fashion/friendPhoto1.png"), "KENZIEJOHNSON65", "business casual", "daytime activity", "wore this to a museum with my family, sweater is Sandro, jeans were thrifted Levi's"],
    [require("../assets/fashion/friendPhoto2.png"), "ALEXAGOMEZZZZ", "streetwear", "brunch", "went to the diner with friends, wanted to wear this shirt from vacation"],
    [require("../assets/fashion/friendPhoto3.png"), "JESSTAYLOR24", "semiformal", "concert or show", "got to see a broadway show earlier today! wore this new dress from Zara's"],
    [require("../assets/fashion/friendPhoto4.png"), "MAY193", "trendy", "date", "outfit from my date earlier today... just getting coffee so wanted to keep it simple"],
    [require("../assets/fashion/friendPhoto5.png"), "FRANFRAN", "officewear", "work", "had to go into the office today so wore this nice button up I forgot I had"]
  ]

  return (
    <View style={styles.view}>
        <ScrollView style={styles.scrollview}>
          <DailyModal setModalVisible={setModalVisible} isModalVisible={isModalVisible}/>
          <MyPost image={myInfo[0]} style={myInfo[1]} activity={myInfo[2]} description={myInfo[3]}/>
          {friendInfo.map((item, idx) => (<FriendPost key={idx} image={item[0]} username={item[1]} style={item[2]} activity={item[3]} description={item[4]}/>))}
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
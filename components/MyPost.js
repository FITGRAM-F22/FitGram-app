import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'; 

export default function MyPost() {
  return (
    <View style={styles.post}> 
        <View>
            <Image
            style={styles.image}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            />
        </View>
        <View style={styles.tags}>
            <View style={[styles.shadowProp, styles.tag]}>
                <MaterialCommunityIcons name="briefcase-outline" size={14}/>
                <Text>{'  '}Style</Text>
            </View>
            <View style={[styles.shadowProp, styles.tag]}>
                <Ionicons name="md-globe-outline" size={14}/>
                <Text>{'  '}Activity</Text>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        paddingTop: 24,
        paddingBottom: 16,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadowProp: {
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
        marginRight: 12,
    },
    tags: {
        marginBottom: 8,
        backgroundColor: '#fff',
    },
    tag: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
    }
});
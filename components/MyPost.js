import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, Touchable } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Foundation} from '@expo/vector-icons'; 

export default function MyPost() {
    // const setDescription = () => {
    //     this.setState({showDescription: false})
    // }

    const [showDescription, setShowDescription] = useState(false);

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
                <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
                    <View style={[styles.shadow, styles.tag]}>
                        <MaterialCommunityIcons name="briefcase-outline" size={14}/>
                        <Text>{'  '}Style</Text>
                    </View>
                    <View style={[styles.shadow, styles.tag]}>
                        <Ionicons name="md-globe-outline" size={14}/>
                        <Text>{'  '}Activity</Text>
                    </View>
                    {showDescription && <View style={[styles.shadow, styles.descriptiontag]}>
                        <Foundation name="page" size={14} color="black" />
                        <Text>{'   '}Description</Text>
                    </View>}
                </TouchableOpacity>
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
        alignItems: 'stretch',
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
    },
    descriptiontag: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 14,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: 150,
        height: 100,
    }
});
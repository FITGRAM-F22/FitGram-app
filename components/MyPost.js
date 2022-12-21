import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Foundation} from '@expo/vector-icons'; 

export default function MyPost({image, style, activity, description}) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <View style={styles.post}> 
            <Image style={styles.image} source={image}/>
            <View style={styles.tags}>
                <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
                    <View style={[styles.shadow, styles.tag]}>
                        <MaterialCommunityIcons name="briefcase-outline" size={14}/>
                        <Text style={styles.regtext}>{style}</Text>
                    </View>
                    <View style={[styles.shadow, styles.tag]}>
                        <Ionicons name="md-globe-outline" size={14}/>
                        <Text style={styles.regtext}>{activity}</Text>
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
        paddingTop: 24,
        paddingBottom: 30,
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
        width: 150,
        height: 150,
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
        width: 170,
        alignSelf: 'flex-start',
    },
    descriptiontag: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 14,
        paddingRight: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        width: 170,
    },
    regtext: {
        marginLeft: 10,
    }
});
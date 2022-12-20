import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function CreatePost() {
    const placeholderDescription = "movie night with friends, just wanted some comfy jeans"

    return (
        <View style={styles.createpostwithdescription}>
            <View style={styles.createpost}>
                <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
                <View style={styles.filters}>
                    <Text style={styles.filterstext}>Filters</Text>
                    <View style={styles.row}>
                        <Text>Daytime</Text>
                        <Feather name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={styles.row}>
                        <Text>Moview</Text>
                        <Feather name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={styles.row}>
                        <Text>Athleisure</Text>
                        <Feather name="chevron-right" size={24} color="black" />
                    </View>
                    <View style={styles.row}>
                        <Text>Mango, Madewell</Text>
                        <Feather name="chevron-right" size={24} color="black" />
                    </View>
                </View>
            </View>
            <TextInput style={styles.description} multiline={true} placeholder={placeholderDescription} placeholderTextColor='black' onChangeText={null}/>
        </View>
    );
}

const styles = StyleSheet.create({
    createpostwithdescription: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    createpost: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    image: {
        width: Dimensions.get('screen').width / 2.5,
        height: Dimensions.get('screen').width / 2.5,
    },
    filters: {
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        paddingVertical: 4,
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    filterstext: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6,
        width: Dimensions.get('screen').width / 2.45
    },
    description: {
        height: 75,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        paddingHorizontal: 12,
        paddingTop: 12,
        marginVertical: 20,
      },
});

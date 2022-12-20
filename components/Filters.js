import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const screen = Dimensions.get("screen");

export default function Filters() {
    const nav = useNavigation();

    const [isDaytimeChecked, setDaytimeChecked] = useState(false);
    const [isNighttimeChecked, setNighttimeChecked] = useState(false);
    const [isBrunchChecked, setBrunchChecked] = useState(false);
    const [isDateChecked, setDateChecked] = useState(false);
    const [isClubChecked, setClubChecked] = useState(false);
    const [isBirthdayChecked, setBirthdayChecked] = useState(false);
    const [isBarChecked, setBarChecked] = useState(false);
    const [isAthleisureChecked, setAthleisureChecked] = useState(false);
    const [isColorblockingChecked, setColorblockingChecked] = useState(false);
    const [isBohoChecked, setBohoChecked] = useState(false);
    const [isGrungeChecked, setGrungeChecked] = useState(false);
    const [isPreppyChecked, setPreppyChecked] = useState(false);

    const setAllFalse = () => {
        setDaytimeChecked(false);
        setNighttimeChecked(false);
        setBrunchChecked(false);
        setDateChecked(false);
        setClubChecked(false);
        setBirthdayChecked(false);
        setBarChecked(false);
        setAthleisureChecked(false);
        setColorblockingChecked(false);
        setBohoChecked(false);
        setGrungeChecked(false);
        setPreppyChecked(false);
    };

    return (
        <View style={styles.filters}> 
            <View style={styles.card}> 
                <TouchableOpacity style={styles.closebutton} onPress={() => {nav.navigate('Tab')}}>
                    <Entypo name="cross" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>Filters</Text>
                <Text style={styles.subheader}>Time</Text>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isDaytimeChecked} onValueChange={setDaytimeChecked} />
                    <Text style={styles.regtext}>{'  '}Daytime</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isNighttimeChecked} onValueChange={setNighttimeChecked} />
                    <Text style={styles.regtext}>{'  '}Nighttime</Text>
                </View>
                <Text style={styles.subheader}>Activity</Text>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isBrunchChecked} onValueChange={setBrunchChecked} />
                    <Text style={styles.regtext}>{'  '}Brunch</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isDateChecked} onValueChange={setDateChecked} />
                    <Text style={styles.regtext}>{'  '}Date</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isClubChecked} onValueChange={setClubChecked} />
                    <Text style={styles.regtext}>{'  '}Club</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isBirthdayChecked} onValueChange={setBirthdayChecked} />
                    <Text style={styles.regtext}>{'  '}Birthday</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isBarChecked} onValueChange={setBarChecked} />
                    <Text style={styles.regtext}>{'  '}Bar</Text>
                </View>
                <Text style={styles.subheader}>Style</Text>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isAthleisureChecked} onValueChange={setAthleisureChecked} />
                    <Text style={styles.regtext}>{'  '}Athleisure</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isColorblockingChecked} onValueChange={setColorblockingChecked} />
                    <Text style={styles.regtext}>{'  '}Colorblocking</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isBohoChecked} onValueChange={setBohoChecked} />
                    <Text style={styles.regtext}>{'  '}Boho</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isGrungeChecked} onValueChange={setGrungeChecked} />
                    <Text style={styles.regtext}>{'  '}Grunge</Text>
                </View>
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isPreppyChecked} onValueChange={setPreppyChecked} />
                    <Text style={styles.regtext}>{'  '}Preppy</Text>
                </View>
                <View style={[styles.buttons]}>
                    <TouchableOpacity style={[styles.button, styles.clearbtn]} onPress={setAllFalse}>
                        <Text style={[styles.btntext, styles.cleartext]}>Clear changes</Text>
                    </TouchableOpacity>  
                    <Text>{'  '}</Text>
                    <TouchableOpacity style={[styles.button, styles.applybtn]} onPress={() => {nav.navigate('Tab')}}>
                        <Text style={[styles.btntext, styles.applytext]}>Apply</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
      );
    }
    
const styles = StyleSheet.create({
    filters: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    card: {
        justifyContent: 'center', 
        height: screen.height - 50,
        width: screen.width - 50,
        backgroundColor: '#FFF',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {}
    },
    closebutton: {
        alignSelf: 'flex-end',
        marginTop: 30,
        marginRight: 5,

    },
    header: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -25,
    },
    subheader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: -6,
        marginLeft: 16,
    },
    regtext: {
        fontSize: 14,
    },
    row: {
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 30,
        alignItems: 'center',
    },
    checkbox: {
        borderRadius: 2,
    },
    buttons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 16,
        marginBottom: 20,
    },
    button: {
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 12,
        marginBottom: 12,
    },
    btntext: {
        fontSize: 14,
        fontWeight: '600'
    },
    clearbtn: {
        backgroundColor: '#D3D3D3',
    },
    cleartext: {
        color: '#000',
    },
    applybtn: {
        backgroundColor: '#4169E1',
    },
    applytext: {
        color: '#fff',
    }
});
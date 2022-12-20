import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons'; 

export default function Settings({setShowSettings}) {
  const placeholderPhone = "(415) 917-7823"
  const placeholderEmail = "john.doe@gmail.com"

  const [isFBChecked, setFBChecked] = useState(false);
  const [isInstaChecked, setInstaChecked] = useState(false);
  const [isPinChecked, setPinChecked] = useState(false);
  const [isFriendsChecked, setFriendsChecked] = useState(false);
  const [isMyselfChecked, setMyselfChecked] = useState(false);

  return (
    <View style={styles.settings}> 
        <Text style={styles.header}>Settings</Text>
        <Text style={styles.subheader}>Phone & email</Text>
        <Text style={[styles.regtext, styles.row]}>{placeholderPhone}</Text>
        <Text style={[styles.regtext, styles.row]}>{placeholderEmail}</Text>
        <Text style={styles.subheader}>Notifications</Text>
        <View style={styles.row}>
            <Text style={styles.regtext}>Daily Fit Check{'      '}</Text>
            <Feather name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.row}>
            <Text style={styles.regtext}>Push Notifications{' '}</Text>
            <Feather name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.row}>
            <Text style={styles.regtext}>Email{'                       '}</Text>
            <Feather name="chevron-right" size={24} color="black" />
        </View>
        <Text style={styles.subheader}>Connected Accounts</Text>
        <View style={styles.row}>
            <Checkbox style={styles.checkbox} value={isFBChecked} onValueChange={setFBChecked} />
            <Text style={styles.regtext}>{'  '}Facebook</Text>
        </View>
        <View style={styles.row}>
            <Checkbox style={styles.squarecheckbox} value={isInstaChecked} onValueChange={setInstaChecked} />
            <Text style={styles.regtext}>{'  '}Instagram</Text>
        </View>
        <View style={styles.row}>
            <Checkbox style={styles.squarecheckbox} value={isPinChecked} onValueChange={setPinChecked} />
            <Text style={styles.regtext}>{'  '}Pinterest</Text>
        </View>
        <Text style={styles.subheader}>Privacy</Text>
        <Text style={styles.smalltext}>Choose who can see your closet</Text>
        <View style={styles.row}>
            <Checkbox style={styles.radiocheckbox} value={isFriendsChecked} onValueChange={() => setFriendsChecked(true)} />
            <Text style={styles.regtext}>{'  '}Friends</Text>
        </View>
        <View style={styles.row}>
            <Checkbox style={styles.radiocheckbox} value={!isFriendsChecked} onValueChange={() => setFriendsChecked(false)} />
            <Text style={styles.regtext}>{'  '}Myself</Text>
        </View>
        <View style={[styles.buttons]}>
            <TouchableOpacity style={[styles.button, styles.cancelbtn]} onPress={() => setShowSettings(false)}>
                <Text style={[styles.btntext, styles.canceltext]}>Cancel</Text>
            </TouchableOpacity>  
            <Text>{'  '}</Text>
            <TouchableOpacity style={[styles.button, styles.savebtn]} onPress={() => setShowSettings(false)}>
                <Text style={[styles.btntext, styles.savetext]}>Save</Text>
            </TouchableOpacity> 
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    settings: {
        alignSelf: 'strech',
        width: 220,
        backgroundColor: '#FFF',
        marginTop: -850,
        marginRight: 40,
        paddingLeft: 16,
        paddingTop: 16,
        alignSelf: 'flex-end',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        }
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subheader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
    },
    regtext: {
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        marginTop: 16,
        marginLeft: 10,
        alignItems: 'center',
    },
    smalltext: {
        marginTop: 2,
        fontSize: 11,
        color: 'gray',
    },
    squarecheckbox: {
        borderRadius: 2,
    },
    radiocheckbox: {
        borderRadius: 10,
    },
    buttons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 16,
    },
    button: {
        alignItems: 'center',
        paddingTop: 12,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 12,
        borderRadius: 10,
        marginTop: 24,
        marginBottom: 12,
    },
    btntext: {
        fontSize: 15,
        fontWeight: '600'
    },
    cancelbtn: {
        backgroundColor: '#D3D3D3',
    },
    canceltext: {
        color: '#000',
    },
    savebtn: {
        backgroundColor: '#4169E1',
    },
    savetext: {
        color: '#fff',
    }
  });
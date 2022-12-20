import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CreateEvent() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          title: '',
          caption: ''
        }
      });

      const onSubmit = data => console.log(data)
    
    return (
        <View style={styles.searchSection}>
            
            <TextInput
                style={styles.input}
                placeholder="Add a title"
                onChangeText={(searchString) => {this.setState({searchString})}}
            >
                {/* <Icon style={styles.searchIcon} name="rocket" size={20} color="#000"/> */}
            </TextInput>
            {errors.title && <Text>This is required.</Text>}

            <TextInput
                style={styles.input}
                placeholder="Add a caption"
                onChangeText={(searchString) => {this.setState({searchString})}}
            />

            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        margin: 12,
    },
    // input: {
    //   height: 40,
    //   margin: 12,
    //   borderWidth: 1,
    //   padding: 10,
    // },
  });
  
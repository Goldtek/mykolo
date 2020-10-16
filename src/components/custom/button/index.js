import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-ico-flags';
import { FontAwesome } from '@expo/vector-icons';

const ButtonField = ({  text, navigation,screen }) => {
    return (      
            <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={()=> navigation.push(`${screen}`)}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
    );
}

export default ButtonField;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        borderWidth:1,
        borderRadius:10,
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:20,
        width: '75%',
        alignSelf: 'center'

    },

    text:{
        color: '#fff',
    }
   
  });
  
  
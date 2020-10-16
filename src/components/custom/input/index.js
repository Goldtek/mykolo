import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-ico-flags';
import { FontAwesome } from '@expo/vector-icons';

const InputField = ({ flag,iconName, type="default",defaultValue,marginTop,marginBottom }) => {
    return (
        <View style={[styles.container,{ marginTop, marginBottom}]}>
           {flag ?  <Icon name={flag} /> : null }
            <TextInput style={styles.input}  underlineColorAndroid="transparent"keyboardType={type} placeholder={defaultValue} />
            {iconName ? <FontAwesome name={iconName} size={28} color="black"  /> : null }
        </View>
    );
}

export default InputField;


const styles = StyleSheet.create({
    container: {
    borderColor: '#eee',
    borderWidth:1,
    borderRadius:6,
      flexDirection: 'row',
      height:45,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:20,
      width: '90%',
      marginLeft: 20,
      marginTop:50
    },

    input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        marginLeft:10,
        marginRight:10,
        backgroundColor: '#fff',
        color: '#424242',
    }
   
  });
  
  
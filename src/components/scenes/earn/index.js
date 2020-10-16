
import React, { useEffect,useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const earn = require("../../../assets/images/earn.png");
const ic = require("../../../assets/images/btn.png");
const logo = require("../../../assets/images/logo.png");


const { height, width } = Dimensions.get("screen");

export default (props) => {
      return  (
      <View style={style.container}>
        <ImageBackground
          style={style.background}
          source={earn}
       >
         <View style={style.topNav}>
                <FontAwesome name="chevron-left" size={28} color="black" onPress={() => props.navigation.goBack()} />
                <Image source={logo} style={style.imgSize} />
                <Text>Skip Here</Text>
            </View>

         <TouchableOpacity style={style.button} onPress={()=> props.navigation.push('Welcome')}>
            <Image source={ic} style={style.img}/>
         </TouchableOpacity>
         </ImageBackground>
      
      </View>
    );
  }


const style = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width
  },
  background: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent:'flex-end'
  },
  button:{
    height:50,
    width:60,
    marginRight:30,
    marginBottom:10
  },
  img:{
    width:'100%',
    height:'100%'
  },
  topNav:{
    marginTop:35,
    paddingHorizontal:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: "center"

  },

  imgSize:{
      height:100,
      width:100
  },
  
});


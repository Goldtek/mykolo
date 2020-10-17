
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
import style from './style';

const earn = require("../../../assets/images/earn.png");
const ic = require("../../../assets/images/btn.png");
const logo = require("../../../assets/images/logo.png");



export default (props) => {
      return  (
      <View style={style.container}>
        <ImageBackground
          style={style.background}
          source={earn}
       >
         {/* <View style={style.topNav}>
                <FontAwesome name="chevron-left" size={28} color="black" onPress={() => props.navigation.goBack()} />
                <Image source={logo} style={style.imgSize} />
                <Text>Skip Here</Text>
            </View> */}

         <TouchableOpacity style={style.button} onPress={()=> props.navigation.push('Welcome')}>
            <Image source={ic} style={style.img}/>
         </TouchableOpacity>
         </ImageBackground>
      
      </View>
    );
  }



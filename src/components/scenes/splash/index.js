
import React, { useEffect,useState } from "react";
import {
  Image,
  ActivityIndicator,
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";
import colors from "../../styles/colors";


const logo = require("../../../assets/images/splash.png");
const { height, width } = Dimensions.get("window");

export default (props) => {
    useEffect(()=>{
       setTimeout(()=>{
        props.navigation.push('Earn');
   }, 5000);
    },[]);

      return  (
      <View style={splashStyles.container}>
        <ImageBackground
          style={splashStyles.background}
          source={logo}
        >
          <ActivityIndicator animating size="large" color={colors.light} style={splashStyles.spinner} />
          </ImageBackground>
        
      </View>
    );
  }


const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width
  },
  background: {
    height: '100%',
    width: '100%',
    alignItems:'center',
    justifyContent: 'center'
  },
  spinner:{
    zIndex:10,

  }
  
});


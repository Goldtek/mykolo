
import React, { useEffect,useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  Text
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import colors from "../../styles/colors";
import InputField from '../../custom/input';
import ButtonField from '../../custom/button';

const bg = require("../../../assets/images/background.png");
const logo = require("../../../assets/images/logo.png");

const { height, width } = Dimensions.get("screen");

export default (props) => {
    const [value, setValue] = useState();

      return  (
      <View style={splashStyles.container}>
        <ImageBackground
          style={splashStyles.background}
          source={bg}
        >
            <View style={splashStyles.topNav}>
                <FontAwesome name="chevron-left" size={28} color="black" onPress={() => props.navigation.goBack()} />
                <Image source={logo} style={splashStyles.imgSize} />
                <Text>Skip Here</Text>
            </View>

            <View style={splashStyles.titleView}>
                <Text style={splashStyles.title}>Save With MyKolo</Text>
                <Text  style={splashStyles.subtitle}>Please Sign In to continue app </Text>
            </View>
            <InputField  iconName='envelope'  defaultValue="Email Address" />
            <InputField  iconName='lock' marginTop={10} defaultValue="Password" marginBottom={50}/>
            <ButtonField text='Sign In' screen='Signup' navigation={props.navigation}/>
            <View style={splashStyles.helpCont}>
                <Text style={splashStyles.help}>Register</Text>
            </View>

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
    width: '100%'
  },
  spinner:{
    zIndex:10
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
  titleView:{
    marginTop:50,
    paddingHorizontal:30,
    justifyContent:'space-between',
  

  },
  title:{
    fontSize:35,
    fontWeight:'bold'  
  },
  subtitle:{
    color:'#ccc',
    fontSize:16
  },
  help:{
    color:'red',
    fontSize:16
  },

  helpCont:{
      marginTop: 30,
      marginHorizontal:20
  }

  
});


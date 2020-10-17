
import React, { useEffect,useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  Text
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import InputField from '../../custom/input';
import ButtonField from '../../custom/button';
import styles from './style';

const bg = require("../../../assets/images/background.png");
const logo = require("../../../assets/images/logo.png");



export default (props) => {
    const [value, setValue] = useState();

      return  (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={bg}
        >
            <View style={styles.topNav}>
                <FontAwesome name="chevron-left" size={28} color="black" onPress={() => props.navigation.goBack()} />
                <Image source={logo} style={styles.imgSize} />
                <Text>Skip Here</Text>
            </View>

            <View style={styles.titleView}>
                <Text style={styles.title}>Save With MyKolo</Text>
                <Text  style={styles.subtitle}>Please Sign In to continue app </Text>
            </View>
            <InputField  iconName='envelope'  defaultValue="Email Address" />
            <InputField  iconName='lock' marginTop={10} defaultValue="Password" marginBottom={50}/>
            <ButtonField text='Sign In' screen='Signup' navigation={props.navigation}/>
            <View style={styles.helpCont}>
                <Text style={styles.help}>Register</Text>
            </View>

        </ImageBackground>
        
      </View>
    );
  }




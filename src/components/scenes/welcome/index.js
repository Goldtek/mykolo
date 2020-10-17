
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
                <Text style={styles.title}>Welcome back!</Text>
                <Text  style={styles.subtitle}>Enter your registered phone number </Text>
                <Text style={styles.subtitle}>to log in </Text>
            </View>
            <InputField flag='nigeria' iconName='mobile' type="numeric" defaultValue="+234 000 000 000"  marginBottom={50}/>
            <ButtonField text='Sign In' screen='Save' navigation={props.navigation}/>
            <View style={styles.helpCont}>
                <Text style={styles.help}>Help?</Text>
            </View>

        </ImageBackground>
        
      </View>
    );
  }



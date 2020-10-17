import {
    StyleSheet,
    Dimensions,
  } from "react-native";

  
const { height, width } = Dimensions.get("window");


export default StyleSheet.create({
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
      alignItems: "center",
      alignSelf: 'center'
  
    },
  
    imgSize:{
        height:100,
        width:100
    },
    
  });
  
import { StyleSheet, Dimensions, } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
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
  
  
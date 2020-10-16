import React from 'react';
import { createStackNavigator,HeaderBackButton  } from '@react-navigation/stack';

import Splash from '../scenes/splash';
import Earn from '../scenes/earn';
import Welcome from '../scenes/welcome';
import Save from '../scenes/save';


import colors, { transparent } from '../styles/colors';
// create screen for signup

const Stack = createStackNavigator();

const defaultProps = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: colors.light,
  headerTitleStyle: { fontWeight: 'bold' }
};


export const PublicNavigator = () => (
  <Stack.Navigator initialRouteName="Spalsh">
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{  
        headerTitle: "",
        headerStyle: {
          height: 0, // Specify the height of your custom header
        },
      }}
    />
    <Stack.Screen
      name="Earn"
      component={Earn}
      options={{
        headerTitle: "",
        headerTransparent: true,
        headerStyle: {
       //   height: 0,
      
        },
        // headerRight: (props) => (
        //     <HeaderBackButton
        //     label='Skip Here'
        //     labelVisible
        //       onPress={() => {
        //       //  props.navigation.push('Splash')
        //       }}
        //     />
        //   ),
      }}
    />

      <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{  
        headerTitle: "",
        headerStyle: {
          height: 0, // Specify the height of your custom header
        },
      }}
    />
     <Stack.Screen
      name="Save"
      component={Save}
      options={{  
        headerTitle: "",
        headerStyle: {
          height: 0, // Specify the height of your custom header
        },
      }}
    />
  </Stack.Navigator>
);
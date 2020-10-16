import { registerRootComponent } from 'expo';
import { StatusBar } from "react-native";
import colors from "./src/components/styles/colors";
StatusBar.setBackgroundColor(colors.primaryDark);

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

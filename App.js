import * as React from 'react';
import { createSwitchNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from './screens/LoginScreen';

import * as firebase from "firebase";
import {firebaseConfig} from "./config";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Componenst/Login';
import Signup from '../Componenst/Signup';
import IntialScreenDesign from '../Componenst/IntialScreenDesign';
import ReferralScreen from '../Careplixone/ReferralCodeScreen';
import WebViewComponent from '../Careplixone/WebViewComponent';
import MaterialTopTabs from './MaterialTopTabs';
import DrawerNavigator from './DrawerNavigator';
import NativeAlert from '../Careplixone/NativeAlert';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="IntialScreen">
      {/* <Stack.Screen name="IntialScreen" component={NativeAlert} /> */}
      {/* <Stack.Screen name="IntialScreen" component={ReferralScreen} /> */}
      <Stack.Screen name="IntialScreen" component={IntialScreenDesign} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      {/* <Stack.Screen name="home" component={DrawerNavigator} /> */}
      {/* <Stack.Screen name="home" component={MaterialTopTabs} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

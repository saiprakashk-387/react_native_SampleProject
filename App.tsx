import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import DrawerNavigator from './Navigations/DrawerNavigator';
import MaterialBottomTabs from './Navigations/MaterialBottomTabs';
// import NativeStackNavigator from './Navigations/NativeStackNavigator';
// import BottomTabNavigator from './Navigations/BottomTabNavigator';
import StackNavigator from './Navigations/StackNavigator';
import MaterialTopTabs from './Navigations/MaterialTopTabs';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        {/* <NativeStackNavigator /> */}
        {/* <BottomTabNavigator /> */}
        {/* <MaterialBottomTabs /> */}
        <StackNavigator />
        {/* <MaterialTopTabs /> */}
      </NavigationContainer>
    </>
  );
};

export default App;

import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Login from './Componenst/Login';
import Dashboard from './Componenst/Dashboard';
import Signup from './Componenst/Signup';
import HTMLToPDFConverter from './Componenst/HTMLToPDF';
import PDFViewerComponent from './Componenst/PDFviewer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="dash" component={Dashboard} />
        <Stack.Screen name="htm-odf" component={HTMLToPDFConverter} />
        <Stack.Screen name="pdfviewer" component={PDFViewerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

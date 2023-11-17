import React from 'react';
import Login from '../Componenst/Login';
import Dashboard from '../Componenst/Dashboard';
import Signup from '../Componenst/Signup';
import HTMLToPDFConverter from '../Componenst/HTMLToPDF';
import PDFViewerComponent from '../Componenst/PDFviewer';
import IntialScreenDesign from '../Componenst/IntialScreenDesign';
// import PDFReport from '../Componenst/MyDoc';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const NativeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="IntialScreen">
      <Stack.Screen name="IntialScreen" component={IntialScreenDesign} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="dash" component={Dashboard} />
      <Stack.Screen name="htm-odf" component={HTMLToPDFConverter} />
      <Stack.Screen name="pdfviewer" component={PDFViewerComponent} />
      {/* <Stack.Screen name="new-pdf" component={PDFReport} /> */}
    </Stack.Navigator>
  );
};

export default NativeStackNavigator;

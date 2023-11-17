import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from '../Componenst/Login';
import Dashboard from '../Componenst/Dashboard';
import Signup from '../Componenst/Signup';
import HTMLToPDFConverter from '../Componenst/HTMLToPDF';
import PDFViewerComponent from '../Componenst/PDFviewer';
import IntialScreenDesign from '../Componenst/IntialScreenDesign';

const Tab = createMaterialBottomTabNavigator();
const MaterialBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="IntialScreen">
      <Tab.Screen name="IntialScreen" component={IntialScreenDesign} />
      <Tab.Screen name="login" component={Login} />
      <Tab.Screen name="signup" component={Signup} />
      <Tab.Screen name="dash" component={Dashboard} />
      <Tab.Screen name="htm-odf" component={HTMLToPDFConverter} />
      <Tab.Screen name="pdfviewer" component={PDFViewerComponent} />
    </Tab.Navigator>
  );
};

export default MaterialBottomTabs;

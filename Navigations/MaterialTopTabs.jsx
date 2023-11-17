import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../Componenst/Login';
import Dashboard from '../Componenst/Dashboard';
import Signup from '../Componenst/Signup';
import HTMLToPDFConverter from '../Componenst/HTMLToPDF';
import PDFViewerComponent from '../Componenst/PDFviewer';
import IntialScreenDesign from '../Componenst/IntialScreenDesign';

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // tabBarPosition="bottom"
      initialRouteName="dash">
      {/* <Tab.Screen name="IntialScreen" component={IntialScreenDesign} /> */}
      {/* <Tab.Screen name="login" component={Login} />
      <Tab.Screen name="signup" component={Signup} /> */}
      <Tab.Screen
        name="dash"
        component={Dashboard}
        options={{
          title: 'Dashboard',
        }}
      />
      <Tab.Screen
        name="htm-odf"
        component={HTMLToPDFConverter}
        options={{
          title: 'SavePdf',
        }}
      />
      <Tab.Screen
        name="pdfviewer"
        component={PDFViewerComponent}
        options={{
          title: 'ViewPdf',
        }}
      />
    </Tab.Navigator>
  );
};

export default MaterialTopTabs;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../Componenst/Login';
import Dashboard from '../Componenst/Dashboard';
import Signup from '../Componenst/Signup';
import HTMLToPDFConverter from '../Componenst/HTMLToPDF';
import PDFViewerComponent from '../Componenst/PDFviewer';
import IntialScreenDesign from '../Componenst/IntialScreenDesign';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator
        // useLegacyImplementation
        initialRouteName="login"
        // backBehavior="history"
      >
        {/* <Drawer.Screen name="IntialScreen" component={IntialScreenDesign} /> */}
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="dash" component={Dashboard} />
        <Drawer.Screen name="signup" component={Signup} />
        <Drawer.Screen name="htm-odf" component={HTMLToPDFConverter} />
        <Drawer.Screen name="pdfviewer" component={PDFViewerComponent} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Dashboard from '../Componenst/Dashboard';
import HTMLToPDFConverter from '../Componenst/HTMLToPDF';
import PDFViewerComponent from '../Componenst/PDFviewer';
import IconDashboard from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabs = ({route}) => {
  styles = {
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    tabBarIconStyle: {
      marginBottom: -12,
    },
  };
  const Params = route.params;
  const screens = [
    {
      name: 'dashboard',
      title: 'Dashboard',
      component: Dashboard,
      icon: 'dashboard',
      tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      tabBarIconStyle: {marginBottom: -12},
      initialParams: Params,
    },
    {
      name: 'htm-odf',
      title: 'SavePdf',
      component: HTMLToPDFConverter,
      icon: 'picture-as-pdf',
      tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      tabBarIconStyle: {marginBottom: -12},
    },
    {
      name: 'pdfviewer',
      title: 'ViewPdf',
      component: PDFViewerComponent,
      icon: 'insert-drive-file',
      tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      tabBarIconStyle: {marginBottom: -12},
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // tabBarPosition="bottom"
      initialRouteName="dashboard">
      {screens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: screen.title,
            tabBarIcon: ({color, size}) => (
              <IconDashboard name={screen.icon} color={'green'} size={15} />
            ),
            tabBarLabelStyle: screen.tabBarLabelStyle,
            tabBarIconStyle: screen.tabBarIconStyle,
          }}
          initialParams={screen.initialParams ? screen.initialParams : null}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MaterialTopTabs;

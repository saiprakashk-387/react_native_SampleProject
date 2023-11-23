import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../Componenst/Login';
import Dashboard from '../Componenst/Dashboard';
import HTMLToPDFConverter from '../Componenst/HTMLToPDF';
import PDFViewerComponent from '../Componenst/PDFviewer';
import IconDashboard from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
const DrawerNavigator = ({route}) => {
  const screens = [
    {
      name: 'dashboard',
      title: 'Dashboard',
      component: Dashboard,
      icon: 'dashboard',
      drawerLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      drawerIconStyle: {marginBottom: -12},
      initialParams: route.params,
    },
    {
      name: 'htm-odf',
      title: 'SavePdf',
      component: HTMLToPDFConverter,
      icon: 'picture-as-pdf',
      drawerLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      drawerIconStyle: {marginBottom: -12},
    },
    {
      name: 'pdfviewer',
      title: 'ViewPdf',
      component: PDFViewerComponent,
      icon: 'insert-drive-file',
      drawerLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      drawerIconStyle: {marginBottom: -12},
    },
  ];
  return (
    <>
      <Drawer.Navigator
        initialRouteName="dash"
        // backBehavior="history"
      >
        {screens.map((screen, index) => (
          <Drawer.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={{
              // title: screen.title,
              drawerLabel: screen.title,
              drawerIcon: ({color, size}) => (
                <IconDashboard name={screen.icon} color={'green'} size={15} />
              ),
              drawerLabelStyle: screen.drawerLabelStyle,
              drawerIconStyle: screen.drawerIconStyle,
            }}
            initialParams={screen.initialParams ? screen.initialParams : null}
          />
        ))}
        <Drawer.Screen
          name="logout"
          component={Login}
          options={{
            drawerLabel: 'Logout',
            drawerIcon: ({color, size}) => (
              <IconDashboard name="logout" color={'red'} size={15} />
            ),
            drawerLabelStyle: {fontSize: 12, fontWeight: 'bold'},
            drawerIconStyle: {marginBottom: -12},
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

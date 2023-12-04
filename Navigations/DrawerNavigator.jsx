import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Alert} from 'react-native';
import Dashboard from '../Componenst/Dashboard';
import HTMLToPDFConverter from '../Componenst/HTMLToPDF';
import PDFViewerComponent from '../Componenst/PDFviewer';
import IconDashboard from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UsersList from '../Componenst/Users';

const Drawer = createDrawerNavigator();
const DrawerNavigator = ({route, navigation}) => {
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
    {
      name: 'users',
      title: 'Users list',
      component: UsersList,
      icon: 'supervised-user-circle',
      drawerLabelStyle: {fontSize: 12, fontWeight: 'bold'},
      drawerIconStyle: {marginBottom: -12},
    },
  ];
  const CustomDrawerContent = props => {
    const handlelogout = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
        navigation.navigate('login');
      } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
      }
    };
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={() => <IconDashboard name="logout" color={'red'} size={15} />}
          labelStyle={{fontSize: 12, fontWeight: 'bold'}}
          onPress={() =>
            Alert.alert(
              'Logout',
              'Are you Sure To Exit',
              [
                {
                  text: 'No',
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => handlelogout(),
                },
              ],
              {cancelable: false},
            )
          }
        />
      </DrawerContentScrollView>
    );
  };
  return (
    <>
      <Drawer.Navigator
        initialRouteName="dash"
        // backBehavior="history"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {screens.map((screen, index) => (
          <Drawer.Screen
            key={index}
            name={screen.title}
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
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;

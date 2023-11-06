import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Login from './Componenst/Login';
import Dashboard from './Componenst/Dashboard';
import Signup from './Componenst/Signup';
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
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{flex: 1}}>
    //   {/* <Text style={{color: 'red'}}>Welcome to React Native</Text> */}
    //   <Login navigation={undefined} />
    //   {/* <FlexDimensionsBasics /> */}
    // </View>
  );
};

export default App;

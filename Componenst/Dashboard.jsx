import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import SpinningLogo from '../Componenst/Spinner';

const Dashboard = ({route, navigation}) => {
  const {params} = route?.params ? route?.params : 'null';
  const image = require('../assests/bg_android.png');
  const [first, setfirst] = useState();
  const getUserEmail = async () => {
    const store = await AsyncStorage.getItem('email');
    return store;
  };
  const val = getUserEmail().then(res => {
    setfirst(res);
  });
  const getUserName = val => {
    let newVal = val?.split('@')[0];
    return newVal;
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={{flex: 0.4}}>
          <SpinningLogo />
        </View>
        <View style={{flex: 0.6}}>
          <Text style={styles.text}>{`Hi ${getUserName(
            first,
          )} Logged in Successful \n Your Email Id: ${first} \n Your Mobile Number:${
            params?.phoneNumber
          }\n Your id :${params?.password}`}</Text>
          {/* <Button
            onPress={() => navigation.navigate('login')}
            title="Go Back"
          />
          <Button
            onPress={() => navigation.navigate('htm-odf')}
            title="Go Next"
          /> */}
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Dashboard;

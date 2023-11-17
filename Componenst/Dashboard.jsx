import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';

const Dashboard = ({route, navigation}) => {
  console.log('route.params', route.params);
  const {params, userInfo} = route?.params ? route?.params : 'null';
  console.log('nested paramsuserInfo', userInfo);
  console.log('params', params);
  const image = require('../assests/bg_android.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text
          style={
            styles.text
          }>{`Hi User Logged in Successful \n Your Email Id: ${params?.email} \n Your Mobile Number:${params?.phoneNumber}\n Your id :${params?.password}`}</Text>
        <Button onPress={() => navigation.navigate('login')} title="Go Back" />
        <Button
          onPress={() => navigation.navigate('htm-odf')}
          title="Go Next"
        />
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

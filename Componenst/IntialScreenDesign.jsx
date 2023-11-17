import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const IntialScreenDesign = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigation.navigate('login');
    }, 1000);
  }, []);
  const image = require('../assests/splashbg.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{`Hi Welcome
           \n
           \n
           \n
           \n
           \n
           \n           
            \n CLI project`}</Text>
      </ImageBackground>
    </View>
  );
};
export default IntialScreenDesign;
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

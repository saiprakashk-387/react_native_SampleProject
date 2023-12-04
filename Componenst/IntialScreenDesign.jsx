import React, {useEffect, useRef} from 'react';
import {ImageBackground, StyleSheet, Text, View, Animated} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const IntialScreenDesign = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigation.navigate('login');
    }, 6000);
  }, []);
  const image = require('../assests/splashbg.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Animated.View
          style={{
            // width: 250,
            // height: 50,
            // backgroundColor: 'powderblue',
            opacity: fadeAnim,
          }}>
          <Text style={styles.text}>{`Hi Welcome To
           \n
           \n
           \n
           \n
           \n
           \n           
           \n CLI project`}</Text>
        </Animated.View>
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
    color: '#81b0ff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

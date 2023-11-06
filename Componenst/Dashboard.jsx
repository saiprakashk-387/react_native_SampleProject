import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Dashboard = ({route, navigation}) => {
  console.log('route.params', route.params);
  const {params, userInfo} = route.params;
  console.log('nested paramsuserInfo', userInfo);
  console.log('params', params);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 0.3, backgroundColor: 'white'}} />

      <View
        style={{
          flex: 0.3,
          backgroundColor: 'white',
          // flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{`Hi User Logged in Successful \n Your Email Id: ${params?.email} \n Your Mobile Number:${params?.phoneNumber}\n Your id :${params?.password}`}</Text>
        <Button onPress={() => navigation.navigate('login')} title="Go Back" />
      </View>

      <View style={{flex: 0.4, backgroundColor: 'white'}} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
export default Dashboard;

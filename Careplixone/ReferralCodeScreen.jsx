import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IconDashboard from 'react-native-vector-icons/MaterialIcons';

const ReferralScreen = () => {
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View>
          <Text style={{color: 'black'}}>Good Evening </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Arnab </Text>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <IconDashboard
            name="menu"
            size={50}
            color="black"
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.4,
        }}>
        <Text style={styles.text}>Referral Code</Text>
        <Text
          style={{
            marginBottom: 20,
          }}>{`Do You have any referral code ? If yes, enter the \nreferral code and click to proceed.`}</Text>
        <TextInput
          style={styles.input}
          name="number"
          keyboardType="numeric"
          placeholder="Enter referral code"
        />
        <View style={{borderRadius: 25}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#5196c9',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#dae2e8',
  },
  button: {
    borderRadius: 25,
    height: 35,
    backgroundColor: '#64b6f5',
    width: 320,
  },
  buttonText: {
    color: 'white',
    padding: 10,
    alignSelf: 'center',
    lineHeight: 15,
  },
});
export default ReferralScreen;

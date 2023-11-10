import React, {useState, useRef} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneInput from 'react-native-phone-number-input';

const Signup = ({navigation}) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (inputName, text) => {
    setInputValues({
      ...inputValues,
      [inputName]: text,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!inputValues?.name) {
      newErrors.name = 'Name Required';
    }
    if (!inputValues?.phoneNumber) {
      newErrors.phoneNumber = 'Mobile Number Required';
    } else if (
      // /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(inputValues?.phoneNumber) ///including country code
      /^\d{9}$/.test(inputValues?.phoneNumber) ///for 10 digits
    ) {
      newErrors.phoneNumber = 'Invalid Mobile Number';
    }
    if (!inputValues?.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValues?.email)) {
      newErrors.email = 'Invalid Email Format';
    }
    if (!inputValues?.password) {
      newErrors.password = 'Password is required';
    } else if (inputValues?.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      const {email, name, password, phoneNumber} = inputValues;
      // Handle the form submission here
      //   storeFormValues(email, name, password, phoneNumber);
      navigation.navigate('login', {
        screen: 'dash',
        params: {userInfo: {email, name, password, phoneNumber}},
      });
      setInputValues({
        name: '',
        password: '',
        phoneNumber: '',
        email: '',
      });
      console.log('Account Created:', name, email, password, phoneNumber);
    }
  };
  const storeFormValues = async (email, name, password, phoneNumber) => {
    try {
      // Create an object to represent the form values
      const formValues = {email, name, password, phoneNumber};

      // Convert the object to a JSON string
      const formValuesJSON = JSON.stringify(formValues);

      // Store the JSON string in AsyncStorage
      await AsyncStorage.setItem('userInfo', formValuesJSON);
      console.log('Form values stored in AsyncStorage');
    } catch (error) {
      console.error('Error storing form values:', error);
    }
  };
  const image1 = require('../assests/splashbg.png');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
      }}>
      {/* <ScrollView> */}

      <View
        style={{
          flex: 0.9,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            padding: 10,
            fontSize: 20,
          }}>
          Create Account <Image style={styles.tinyLogo} source={image1} />
        </Text>
        <SafeAreaView style={styles.container}>
          <Text style={{color: 'black'}}>Name</Text>
          <TextInput
            style={styles.input}
            name="name"
            value={inputValues.name}
            onChangeText={text => handleInputChange('name', text)}
            placeholder="Enter Name"
          />
          {errors.name && <Text style={{color: 'red'}}>{errors.name}</Text>}
          <Text style={{color: 'black'}}>Mobile Number</Text>
          {/* <PhoneInput
            style={styles.input}
            // ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            // defaultCountry="IN"
            // layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
          /> */}
          <TextInput
            name="phoneNumber"
            style={styles.input}
            value={inputValues.phoneNumber}
            onChangeText={text => handleInputChange('phoneNumber', text)}
            placeholder="Mobile Number"
            keyboardType="numeric"
          />
          {errors.phoneNumber && (
            <Text style={{color: 'red'}}>{errors.phoneNumber}</Text>
          )}
          <Text style={{color: 'black'}}>Email</Text>
          <TextInput
            style={styles.input}
            name="email"
            value={inputValues.email}
            onChangeText={text => handleInputChange('email', text)}
            placeholder="Email"
          />
          {errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
          <Text style={{color: 'black'}}>Password</Text>
          <TextInput
            style={styles.input}
            name="passsword"
            value={inputValues.password}
            onChangeText={text => handleInputChange('password', text)}
            placeholder="password"
            keyboardType="numeric"
            secureTextEntry
          />
          {errors.password && (
            <Text style={{color: 'red'}}>{errors.password}</Text>
          )}
          <View style={{borderRadius: 25}}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                borderWidth: 5,
                borderColor: '#fff',
                height: 50,
                backgroundColor: '#d3d1cf',
                width: 200,
                alignSelf: 'center',
              }}
              onPress={handleFormSubmit}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  alignSelf: 'center',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{alignSelf: 'center', padding: 30}}
            onPress={() => navigation.navigate('login')}>
            Already Have Account ? Sign In
          </Text>
        </SafeAreaView>
      </View>

      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#f1f4f2',
    backgroundColor: '#f1f4f2',
  },
  container: {
    marginHorizontal: 16,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Signup;

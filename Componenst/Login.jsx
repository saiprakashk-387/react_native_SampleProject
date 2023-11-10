import React, {useState, useRef, useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  Image,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const Login = ({navigation}) => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (inputName, text) => {
    setInputValues({
      ...inputValues,
      [inputName]: text,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    // if (!inputValues?.phoneNumber) {
    //   newErrors.phoneNumber = 'Mobile Number Required';
    // } else if (
    //   // /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(inputValues?.phoneNumber) ///including country code
    //   /^\d{9}$/.test(inputValues?.phoneNumber) ///for 10 digits
    // ) {
    //   newErrors.phoneNumber = 'Invalid Mobile Number';
    // }
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
    const password = '15874655';
    const phoneNumber = '852478524';
    const email = 'sai@yopmai,com';
    navigation.navigate('dash', {
      params: {password, phoneNumber, email},
    });
    // const {email, password, phoneNumber} = inputValues;
    // if (validateForm()) {
    //   // Handle the form submission here
    //   navigation.navigate('dash', {
    //     params: {password, phoneNumber, email},
    //   });
    //   setInputValues({
    //     password: '',
    //     phoneNumber: '',
    //     email: '',
    //   });
    //   console.log('login Form submitted:', email, password);
    // }
  };
  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
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
          flex: 0.8,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            padding: 10,
            fontSize: 20,
          }}>
          Sign In <Image style={styles.tinyLogo} source={image1} />
        </Text>

        <SafeAreaView style={styles.container}>
          {/* <Text style={{color: 'black'}}>Mobile Number</Text>
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
          )} */}
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Switch value={isChecked} onValueChange={handleCheckBoxToggle} />
            <Text style={{fontSize: 10}}>Remember Me</Text>
            <Text style={{fontSize: 10, color: 'black'}}>
              Forget Password ?
            </Text>
          </View>
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
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{alignSelf: 'center', padding: 30}}
            onPress={() => navigation.navigate('signup')}>
            Create a New Account ? SignUp
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
  boxShadow: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default Login;

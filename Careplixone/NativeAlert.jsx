import React from 'react';
import {Alert} from 'react-native';
import WebView from 'react-native-webview';

const NativeAlert = ({navigation}) => {
  const html = `<html>
                    <head>
                     <title>WebView Example</title>
                        <style>
                          body {
                             text-align: center;
                             margin: 0;
                             display: flex; 
                             align-items: center;
                             justify-content: center; 
                             height: 100vh;
                            }
                          h1 {
                              color: #333;
                            }
                           button {
                             font-size: 20px; 
                             padding: 15px 30px; 
                             background-color: #3498db; 
                             color: #fff; 
                             border: none; 
                             border-radius: 5px; 
                             cursor: pointer;
                            }
                        </style>
                    </head>
                    <body>
                       <h1>Hello, WebView!</h1>
                      <script>
                         function triggerNativeAlert() {
                         window.ReactNativeWebView.postMessage('showAlert');
                        }
                      </script>
                      <button onclick="triggerNativeAlert()">Show Native Alert</button>
                    </body>
                </html>`;
  const handleWebViewMessage = event => {
    const message = event.nativeEvent.data;
    if (message === 'showAlert') {
      //   ShowNativeAlert();
      navigation.navigate('login');
    }
  };
  const ShowNativeAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return <WebView source={{html}} onMessage={handleWebViewMessage} />;
};

export default NativeAlert;

import React from 'react';
import WebView from 'react-native-webview';

const WebViewComponent = () => {
  // Communicating between JS and Native
  ///https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native

  // 1  React Native -> Web: The injectedJavaScript prop
  const runFirstt = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  // 1.1 The injectedJavaScriptBeforeContentLoaded prop
  const runFirst = `
      window.isNativeApp = true;
      document.body.style.backgroundColor = 'red';
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  // 1.2 The injectedJavaScriptObject prop (Android Only)
  const htmll = `<html>
               <head>
                  <script>
                    window.onload = (event) => {
                    if (window.ReactNativeWebView.injectedObjectJson()) {
                  document.getElementById('output').innerHTML = JSON.parse(window.ReactNativeWebView.injectedObjectJson()).customValue;
                } 
              }
                  </script>
               </head>
            <body>
              <p id="output">undefined</p>
           </body>
            </html>`;
  // 2  React Native -> Web: The injectJavaScript method
  const run = `
  document.body.style.backgroundColor = 'blue';
  true;
`;

  // setTimeout(() => {
  //   webref.injectJavaScript(run);
  // }, 3000);

  // 3  Web -> React Native: The postMessage method and onMessage prop
  const html = `
  <html>
  <head></head>
  <body>
  <h1>Hello, World! \nReactNativeWebView.postMessage\n on message</h1>
    <script>
      setTimeout(function () {
        window.ReactNativeWebView.postMessage("Hello User!")
      }, 2000)
    </script>
  </body>
  </html>
`;
  return (
    <WebView
      originWhitelist={['*']}
      // source={{
      //   html: `
      //     <!DOCTYPE html>
      //     <html lang="en">
      //     <head>
      //     <meta charset="UTF-8" />
      //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      //     <title>Delayed Alert</title>
      //     <!-- <script src="DelayScript.js" defer></script> -->
      //     </head>
      //     <body>
      //     <h1>Hello, World!</h1>

      //     </body>
      //    </html>
      //   `,
      //   // html: html,
      // }}
      // ref={r => (webref = r)} ///step 2
      // injectedJavaScript={runFirstt}
      // injectedJavaScriptBeforeContentLoaded={runFirst}
      // injectedJavaScriptObject={{customValue: 'myCustomValue'}}

      source={{html}} ////step 3
      onMessage={event => {
        alert(event.nativeEvent.data);
      }}
    />
  );
};

export default WebViewComponent;

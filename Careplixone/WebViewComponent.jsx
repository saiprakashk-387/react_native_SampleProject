import React from 'react';
import WebView from 'react-native-webview';

const WebViewComponent = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        html: `
          <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Delayed Alert</title>
          <!-- <script src="DelayScript.js" defer></script> -->
        </head>
        <body>
          <h1>Hello, World!</h1>
          <script>
            window.onload = function () {
              setTimeout(function () {
                alert('Loaded');
              }, 3000); ///3 sec
            };
          </script>
        </body>
      </html>
       `,
      }}
    />
  );
};

export default WebViewComponent;

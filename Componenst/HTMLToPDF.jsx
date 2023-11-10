import React, {useState} from 'react';
import {View, Button, PermissionsAndroid} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';

const HTMLToPDFConverter = ({navigation}) => {
  const [first, setfirst] = useState();

  const convertToPDF = async () => {
    const htmlContent =
      '<html><body><h1>Hello, PDF!</h1>\n<h1>Vieweeeee, PDF!</h1>\n<h1>Your, PDF!</h1></body></html>';

    const options = {
      html: htmlContent,
      fileName: 'sample', // Specify the file name without the file extension
      directory: 'downloads', // Choose the target directory (e.g., 'Documents', 'Download', etc.)
    };

    try {
      const pdf = await RNHTMLtoPDF.convert(options);
      setfirst(`file://${pdf.filePath}`);
      const path = RNFS.DownloadDirectoryPath + '/' + 'sample.pdf'; ///custom directory path
      ///to get permission from android to save file in device
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to save the file.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Continue with the copy operation of file
        await RNFS.copyFile(pdf.filePath, path);
      } else {
        console.error('Storage permission denied');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const ViewPDF = () => {
    navigation.navigate('pdfviewer', {pdfUri: first});
  };
  return (
    <View>
      {!first && <Button title="Convert to PDF" onPress={convertToPDF} />}
      {first && (
        <>
          <Button title="view to PDF" onPress={ViewPDF} />
        </>
      )}
    </View>
  );
};

export default HTMLToPDFConverter;

import React from 'react';
import Pdf from 'react-native-pdf';

const PDFViewerComponent = ({route}) => {
  const {pdfUri} = route.params ? route.params : 'null';
  const source = {uri: pdfUri && pdfUri, cache: true};
  return (
    <Pdf
      style={{flex: 1}}
      source={source}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`Number of pages: ${numberOfPages}`);
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`Current page: ${page}`);
      }}
      onError={error => {
        console.error(error);
      }}
    />
  );
};

export default PDFViewerComponent;

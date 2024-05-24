// Sample that finally worked for react-pdf
// Use as a reference and ignore otherwise

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  isEvalSupported: false
};

export default function PDFViewer() {
  const [pageNumber, setPageNumber] = useState(1);

  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

  return (
    <Document
      file="/sample.pdf"
      onItemClick={onItemClick}
      options={options}
      onLoadStart={() => {
        console.log("START");
      }}
      onLoadError={() => {
        console.log("ERROR");
      }}
      onLoadProgress={() => {
        console.log("PROGRESS");
      }}
    >
      <Page pageNumber={pageNumber || 1} />
    </Document>
  );
}

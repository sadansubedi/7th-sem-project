// src/PDFViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // import default styles
//import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // import default layout styles

const PDFconverter= ({ url }) => (
  <div style={{ height: '750px', width: '100%',zIndex: 0 }}>
    <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
      <Viewer fileUrl={url} />
    </Worker>
  </div>
);

export default PDFconverter;

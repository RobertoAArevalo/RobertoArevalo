// PDFViewer.js
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ width: '600px', margin: 'auto' }}>
            <Document
                file="/Arevalo_Final_EthicsEdit.pdf" // Adjust path as needed
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index+1}`} pageNumber={index+1} />
                ))}
            </Document>
        </div>
    );
}

export default PDFViewer;
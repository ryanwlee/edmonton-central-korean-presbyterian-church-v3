import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set worker URL
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewProps {
  file: string;
}

const PDFView = ({ file }: PDFViewProps) => {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={Math.min(window.innerWidth * 0.9, 800)}
          />
        ))}
      </Document>
    </div>
  );
};

export default PDFView;

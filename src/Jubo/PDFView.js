import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFView = ({ file }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [page, setPage] = useState(1);

  return (
    <div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
      >
        <div
          style={{ height: "750px", border: "1px solid rgba(0, 0, 0, 0.3)" }}
        >
          <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
    </div>
  );
};

export default PDFView;

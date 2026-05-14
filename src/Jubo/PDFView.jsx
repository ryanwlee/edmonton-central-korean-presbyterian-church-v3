import { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFView = ({ file }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [page, setPage] = useState(1);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl={file}
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
        defaultScale={"PageFit"}
      />
    </Worker>
  );
};

export default PDFView;

// Stands in for @react-pdf-viewer/core and /default-layout, which need a canvas
// and a web worker that jsdom does not provide. Wired up via moduleNameMapper.
export const Worker = ({ workerUrl, children }) => (
  <div data-testid="pdf-worker" data-worker-url={workerUrl}>
    {children}
  </div>
);

export const Viewer = ({ fileUrl, defaultScale }) => (
  <div
    data-testid="pdf-viewer"
    data-file-url={fileUrl}
    data-default-scale={defaultScale}
  />
);

export const defaultLayoutPlugin = () => ({});

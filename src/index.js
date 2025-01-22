import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalFonts from "./styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Intro from "./Intro/Intro";
import Container from "./Container";
import Service from "./Service/Service";
import Announcement from "./Announcement/Announcement";
import Reservation from "./Reservation/Intro";
import Serving from "./Serving/Serving";
import Education from "./Education/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div />,
    children: [
      {
        path: "/",
        element: <Container component={<Home />} />,
      },
      {
        path: "/intro",
        element: <Container component={<Intro />} />,
      },
      {
        path: "/service",
        element: <Container component={<Service />} />,
      },
      {
        path: "/announcement",
        element: <Container component={<Announcement />} />,
      },
      {
        path: "/reserve",
        element: <Container component={<Reservation />} />,
      },
      {
        path: "/serving",
        element: <Container component={<Serving />} />,
      },
      {
        path: "/education",
        element: <Container component={<Education />} />,
      },
      {
        path: "*",
        element: <Container component={<Home />} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

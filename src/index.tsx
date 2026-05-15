import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "@/app/App";
import theme from "@/app/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Intro from "@/pages/Intro/Intro";
import Service from "@/pages/Service/Service";
import Announcement from "@/pages/Announcement/Announcement";
import Reservation from "@/pages/Reservation/Reservation";
import Serving from "@/pages/Serving/Serving";
import Education from "@/pages/Education/Education";
import Jubo from "@/pages/Jubo/Jubo";
import Admin from "@/pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div />,
    children: [
      { index: true, element: <Home /> },
      { path: "intro", element: <Intro /> },
      { path: "service", element: <Service /> },
      { path: "announcement", element: <Announcement /> },
      { path: "reserve", element: <Reservation /> },
      { path: "serving", element: <Serving /> },
      { path: "education", element: <Education /> },
      { path: "jubo", element: <Jubo /> },
      { path: "admin", element: <Admin /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

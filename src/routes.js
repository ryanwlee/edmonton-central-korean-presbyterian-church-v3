import App from "./App";
import Container from "./Container";
import Home from "./Home/Home";
import Intro from "./Intro/Intro";
import Service from "./Service/Service";
import Announcement from "./Announcement/Announcement";
import Reservation from "./Reservation/Intro";
import Serving from "./Serving/Serving";
import Education from "./Education/Education";
import Jubo from "./Jubo/Jubo";
import Admin from "./Admin/Admin";

export const childRoutes = [
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
    path: "/jubo",
    element: <Container component={<Jubo />} />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "*",
    element: <Container component={<Home />} />,
  },
];

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <div />,
    children: childRoutes,
  },
];

export default routes;

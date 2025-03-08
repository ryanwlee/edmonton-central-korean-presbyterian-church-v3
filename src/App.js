import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Hero from "./Hero";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import hero from "./images/hero.png";
import test_img from "./images/test_image.webp";

import "./App.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [shouldRenderHero, setShouldRenderHero] = useState(true);
  const [currentHeroImage, setCurrentHeroImage] = useState(null);
  const location = useLocation();
  const transitionTime = 1000; // Total transition time in ms

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;
  /*
  !!!
  Put each img into matching navItem
  !!!
  */
  const navItems = [
    { name: "소개", to: "intro", img: null },
    { name: "예배", to: "service", img: hero },
    { name: "교육부", to: "education", img: null },
    { name: "사역과 섬김", to: "serving", img: null },
    // { name: "주보", to: "jubo", img: test_img },
    { name: "주보", to: "jubo", img: null },
    { name: "시설 예약", to: "reserve", img: null },
  ];

  // Find the current page in navItems
  const currentPath = location.pathname.substring(1); // Remove leading slash
  const currentPage = navItems.find((item) => item.to === currentPath);

  // Determine if Hero should be shown
  const showHero =
    location.pathname === "/" || (currentPage && currentPage.img !== null);

  // Get the hero image from the current page, if available
  const nextHeroImage =
    location.pathname === "/" ? hero : currentPage?.img || null;
  const isHeroImageChanging = showHero && currentHeroImage !== nextHeroImage;

  // Initial page load animation
  useEffect(() => {
    // Trigger animation after a short delay on initial load
    setTimeout(() => {
      setHeroVisible(showHero);
      setCurrentHeroImage(nextHeroImage);
    }, 100);
  }, []);

  // Handle animation when route changes
  useEffect(() => {
    if (showHero) {
      // If we're showing a hero and the image is changing
      if (isHeroImageChanging) {
        // First hide the current hero
        setHeroVisible(false);

        // After the full transition time, update the image and show the new hero
        setTimeout(() => {
          setCurrentHeroImage(nextHeroImage);
          setShouldRenderHero(true);

          // Give a small delay before starting the show animation
          setTimeout(() => {
            setHeroVisible(true);
          }, 50);
        }, transitionTime);
      } else {
        // If no image change, just show the hero
        setShouldRenderHero(true);
        setTimeout(() => setHeroVisible(true), 50);
        setCurrentHeroImage(nextHeroImage);
      }
    } else {
      // If we're hiding the hero
      setHeroVisible(false);
      setTimeout(() => setShouldRenderHero(false), transitionTime);
    }
  }, [showHero, nextHeroImage]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        메뉴
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.to}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="App">
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          anchor={"right"}
        >
          {drawer}
        </Drawer>
      </nav>
      {shouldRenderHero && (
        <Hero
          heroImage={currentHeroImage}
          visible={heroVisible}
          transitionTime={transitionTime}
        />
      )}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

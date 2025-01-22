import * as React from "react";

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
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";

function App(props) {
  const { window } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;
  const navItems = [
    { name: "소개", to: "intro" },
    { name: "예배", to: "service" },
    { name: "교육부", to: "education" },
    { name: "사역과 섬김", to: "serving" },
    { name: "시설 예약", to: "reserve" },
  ];

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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="App">
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <nav>
        <Drawer
          container={container}
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
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

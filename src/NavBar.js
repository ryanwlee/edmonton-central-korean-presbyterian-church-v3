import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/logo.png";
import { Link, useLocation } from "react-router-dom";
import Styled from "styled-components";
import { device } from "./Style/index";

const navBarCss = {
  display: "flex",
  height: "60px",
  backgroundColor: "#353535",
  color: "#FFFFFF",
};

const logoCss = {
  maxWidth: "344px",
  height: "40px",
};

const navItemsCss = {
  display: "flex",
  flexDirection: "row",
  flexGrow: "1",
  justifyContent: "flex-end",
};

const NavItemCss = Styled(Link)`
  width: 15%;
  max-width: 198px;
  min-width: 100px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: KoPubWorld Dotum Bold;
  color: ${({ active }) => (active ? "#5DB683" : "#ffffff")};
  text-decoration: none;

  @media ${device.md} {
    display: none;
  }
`;

const Divider = Styled.div`
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;

  @media ${device.md} {
    display: none;
  }
`;

const buttonCss = {
  width: "60px",
  display: { xs: "block", md: "none" },
};

function NavBar({ handleDrawerToggle }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <AppBar position="static">
      <Toolbar sx={navBarCss}>
        <Link to={"/"}>
          <img src={logo} alt="Logo" style={logoCss} />
        </Link>
        <div style={navItemsCss}>
          <NavItemCss
            to={"/intro"}
            active={currentPath === "/intro" ? true : false}
          >
            소개
          </NavItemCss>
          <Divider />
          <NavItemCss
            to={"/service"}
            active={currentPath === "/service" ? true : false}
          >
            예배
          </NavItemCss>
          <Divider />
          <NavItemCss
            to={"/education"}
            active={currentPath === "/education" ? true : false}
          >
            교육부
          </NavItemCss>
          <Divider />
          <NavItemCss
            to={"/serving"}
            active={currentPath === "/serving" ? true : false}
          >
            사역과 섬김
          </NavItemCss>
          <Divider />
          <NavItemCss
            to={"/jubo"}
            active={currentPath === "/jubo" ? true : false}
          >
            주보
          </NavItemCss>
          <Divider />
          <NavItemCss
            to={"/reserve"}
            active={currentPath === "/reserve" ? true : false}
          >
            시설 예약
          </NavItemCss>
          {/* <Divider />
          <Link to={'announcement'} style={navItemCss}>
            소식
          </Link>
          <Divider />
          <Typography variant='h6' component='div' style={navItemCss}>
            주보
          </Typography> */}
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={buttonCss}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

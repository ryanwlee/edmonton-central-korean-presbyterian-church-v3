import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/logo.png";
import { Link, useLocation } from "react-router-dom";
import Styled from "styled-components";
import { device } from "./Style/index";
import { useState, useRef } from "react";

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

const DropdownContainer = Styled.div`
  position: relative;
  width: 15%;
  max-width: 198px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.md} {
    display: none;
  }
`;

const DropdownTrigger = Styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  font-family: KoPubWorld Dotum Bold;
  color: ${({ active }) => (active ? "#5DB683" : "#ffffff")};
  cursor: pointer;
  user-select: none;
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
  const [anchorPosition, setAnchorPosition] = useState(null);
  const menuRef = useRef(null);
  const open = Boolean(anchorPosition);

  const handleMenuOpen = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setAnchorPosition({
      top: 60, // Bottom of navbar (navbar height)
      left: rect.left,
    });
  };

  const handleMenuClose = () => {
    setAnchorPosition(null);
  };

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
          <DropdownContainer
            ref={menuRef}
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            <DropdownTrigger active={currentPath === "/service" ? true : false}>
              예배
            </DropdownTrigger>
            <Menu
              anchorReference="anchorPosition"
              anchorPosition={anchorPosition}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
                sx: {
                  backgroundColor: "#353535",
                  padding: 0,
                },
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "#353535",
                  borderRadius: 0,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                  minWidth: menuRef.current?.offsetWidth || "auto",
                  marginTop: 0,
                },
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                component={Link}
                to="/service"
                onClick={handleMenuClose}
                sx={{
                  color: "#ffffff",
                  fontFamily: "KoPubWorld Dotum Bold",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "12px 16px",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                예배 안내
              </MenuItem>
              <MenuItem
                component="a"
                href="https://open.spotify.com/show/2Lkolq2OcdFktuWOxbY20d?si=YHcjVU_4QhmF9JKjB1XYyg"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
                sx={{
                  color: "#ffffff",
                  fontFamily: "KoPubWorld Dotum Bold",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "12px 16px",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                주일설교 오디오
              </MenuItem>
            </Menu>
          </DropdownContainer>
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

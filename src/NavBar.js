import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/logo.png';

import {
  navBarCss,
  logoCss,
  navItemsCss,
  navItemCss,
  dividerCss,
  buttonCss,
} from './NavBarCss';

function NavBar({ handleDrawerToggle }) {
  const Divider = () => <div style={dividerCss}></div>;
  return (
    <AppBar position='static'>
      <Toolbar sx={navBarCss}>
        <img src={logo} alt='Logo' style={logoCss} />
        <div style={navItemsCss}>
          <Typography variant='h6' component='div' style={navItemCss}>
            소개
          </Typography>
          <Divider />
          <Typography variant='h6' component='div' style={navItemCss}>
            예배
          </Typography>
          <Divider />
          <Typography variant='h6' component='div' style={navItemCss}>
            소식
          </Typography>
          <Divider />
          <Typography variant='h6' component='div' style={navItemCss}>
            주보
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
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

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

const navBarCss = {
  display: 'flex',
  height: '60px',
  backgroundColor: '#353535',
  color: '#FFFFFF',
};

const logoCss = {
  maxWidth: '344px',
  height: '40px',
};

const navItemsCss = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  justifyContent: 'flex-end',
};

const navItemCss = {
  width: '15%',
  maxWidth: '198px',
  minWidth: '100px',
  textAlign: 'center',
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  fontFamily: 'KoPubWorld Dotum Bold',
  color: '#FFFFFF',
  textDecoration: 'none',
};

const dividerCss = {
  borderRight: '2px solid rgba(255, 255, 255, 0.2)',
  height: '20px',
  marginTop: 'auto',
  marginBottom: 'auto',
};

const buttonCss = {
  width: '100px',
};

function NavBar({ handleDrawerToggle }) {
  const Divider = () => <div style={dividerCss}></div>;
  return (
    <AppBar position='static'>
      <Toolbar sx={navBarCss}>
        <Link to={'/'}>
          <img src={logo} alt='Logo' style={logoCss} />
        </Link>
        <div style={navItemsCss}>
          {/* <Link to={'intro'} style={navItemCss}>
            소개
          </Link>
          <Divider /> */}
          <Link to={'service'} style={navItemCss}>
            예배
          </Link>
          {/* <Divider />
          <Link to={'announcement'} style={navItemCss}>
            소식
          </Link>
          <Divider />
          <Typography variant='h6' component='div' style={navItemCss}>
            주보
          </Typography> */}
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
            sx={buttonCss}
          >
            <MenuIcon />
          </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { device } from './Style/index'

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
  color: #FFFFFF;
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
  width: '100px',
  display: { xs: 'block', md: 'none' },
};

function NavBar({ handleDrawerToggle }) {
  return (
    <AppBar position='static'>
      <Toolbar sx={navBarCss}>
        <Link to={'/'}>
          <img src={logo} alt='Logo' style={logoCss} />
        </Link>
        <div style={navItemsCss}>
          <NavItemCss to={'intro'}>
            소개
          </NavItemCss>
          <Divider />
          <NavItemCss to={'service'}>
            예배
          </NavItemCss>
          <Divider />
          <NavItemCss to={'https://booking.appointy.com/eckpc'}>
            시설물 예약
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

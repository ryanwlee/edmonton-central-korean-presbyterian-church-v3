import {
  container,
  logoContainer,
  logoCss,
  lineHeader,
  lineContainer,
  lineIconCss,
  lineTextCss,
  reserve,
  snsContainer,
  snsImage,
} from './FooterCss';
import logo from './images/logo.png';
import Pin from './images/footerPin.png';
import Call from './images/call.png';
import Mail from './images/mail.png';
import Youtube from './images/youtube.png';
import Facebook from './images/facebook.png';
import Insta from './images/insta.png';
import Gracechurch from './images/gracechurch.png';

function Footer() {
  return (
    <div style={container}>
      <div style={logoContainer}>
        <img src={logo} alt='Logo' style={logoCss} />
      </div>
      <div style={lineHeader}>CONTACT</div>
      <div style={lineContainer}>
        <img src={Pin} alt={'Pin'} style={lineIconCss} />
        <div style={lineTextCss}>2551 Ellwood Dr SW, Edmonton, AB T6X 0P7</div>
      </div>
      <div style={lineContainer}>
        <img src={Call} alt={'Pin'} style={lineIconCss} />
        <div style={lineTextCss}>+1 (780)437-6229</div>
      </div>
      <div style={lineContainer}>
        <img src={Mail} alt={'Pin'} style={lineIconCss} />
        <div style={lineTextCss}>eckpc1988@gmail.com</div>
      </div>
      <div style={snsContainer}>
        <img src={Youtube} alt={'Youtube'} style={snsImage} />
        <img src={Facebook} alt={'Facebook'} style={snsImage} />
        <img src={Insta} alt={'Insta'} style={snsImage} />
        <img src={Gracechurch} alt={'Gracechurch'} style={snsImage} />
      </div>
      <div style={reserve}>
        © 2023 Edmonton Central Korean Presbyterian Church. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;

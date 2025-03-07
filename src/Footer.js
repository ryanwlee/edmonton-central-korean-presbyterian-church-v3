import logo from "./images/logo.png";
import Pin from "./images/footerPin.png";
import Call from "./images/call.png";
import Mail from "./images/mail.png";
import Youtube from "./images/youtube.png";
import Facebook from "./images/facebook.png";
import Insta from "./images/insta.png";
import Gracechurch from "./images/gracechurch.png";
import { FlexColumn } from "./Style";
import { Link } from "react-router-dom";

const Container = {
  ...FlexColumn,
  backgroundColor: "#242424",
  height: "450px",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const LogoContainer = {
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "40px",
};

const LogoCss = { width: "auto", height: "40px" };

const lineContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

const lineIconCss = {
  width: "15px",
};

const lineTextCss = {
  color: "#FFFFFF",
  fontSize: "15px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
  opacity: "60%",
};

const lineHeader = {
  color: "#5DB683",
  fontSize: "22px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
  marginBottom: "10px",
};

const reserve = {
  color: "#FFFFFF",
  fontSize: "10px",
  fontWeight: "300",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
  marginBottom: "5px",
  opacity: "60%",
};

const snsContainer = {
  marginTop: "30px",
  marginBottom: "30px",
  display: "flex",
  gap: "10px",
};

const snsImage = {
  width: "30px",
};

function Footer() {
  return (
    <div style={Container}>
      <div style={LogoContainer}>
        <img src={logo} alt="Logo" style={LogoCss} />
      </div>
      <div style={lineHeader}>CONTACT</div>
      <div style={lineContainer}>
        <img src={Pin} alt={"Pin"} style={lineIconCss} />
        <div style={lineTextCss}>2551 Ellwood Dr SW, Edmonton, AB T6X 0P7</div>
      </div>
      <div style={lineContainer}>
        <img src={Call} alt={"Pin"} style={lineIconCss} />
        <div style={lineTextCss}>+1 (780)437-6229</div>
      </div>
      <div style={lineContainer}>
        <img src={Mail} alt={"Pin"} style={lineIconCss} />
        <div style={lineTextCss}>eckpc1988@gmail.com</div>
      </div>
      <div style={snsContainer}>
        <Link
          to={"https://www.youtube.com/channel/UCzz-Hi9PzGYiQE0zEOn8idg/live"}
        >
          <img src={Youtube} alt={"Youtube"} style={snsImage} />
        </Link>
        {/* <img src={Facebook} alt={'Facebook'} style={snsImage} />
        <img src={Insta} alt={'Insta'} style={snsImage} /> */}
        <Link to={"https://www.grace-central.com/"}>
          <img src={Gracechurch} alt={"Gracechurch"} style={snsImage} />
        </Link>
      </div>
      <div style={reserve}>
        © 2023 Edmonton Central Korean Presbyterian Church. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;

import Button from "@mui/material/Button";
import { FlexRow, FlexColumn, device } from "./Style";
import Styled from "styled-components";

const HeroContainer = Styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-height: ${props => props.visible ? '800px' : '0px'};
  overflow: hidden;
  transition: max-height ${props => props.transitionTime}ms cubic-bezier(.7,0,.3,1);
  opacity: ${props => props.visible ? '1' : '0'};
  transition-property: max-height, opacity;
  transition-duration: ${props => props.transitionTime}ms;
`;

const HeroContent = Styled.div`
  position: absolute;
  left: 80px;

  @media ${device.sm} {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: fit-content;
  }
`;

const mainText = {
  color: "#FFFFFF",
  fontSize: "40px",
  marginBottom: "10px",
  fontWeight: "600",
  fontFamily: "establishRetrosansOTF",
};

const subText = {
  color: "#FFFFFF",
  fontSize: "22px",
  marginBottom: "10px",
  fontWeight: "600",
  fontFamily: "KoPubWorld Dotum Bold",
};

const mainButton = {
  backgroundColor: "#5DB683",
  color: "#FFFFFF",
  borderRadius: "100px",
  fontSize: "22px",
  width: "200px",
  height: "60px",
  fontWeight: "600",
  fontFamily: "KoPubWorld Dotum Bold",
};

const heroImageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
};

function Hero({ heroImage, visible = true, transitionTime = 1000 }) {
  return (
    <HeroContainer visible={visible} transitionTime={transitionTime}>
      <img src={heroImage} alt="Hero" style={heroImageStyle} />
      <HeroContent>
        {/* <div style={mainText}>메인 텍스트</div> */}
        <div style={FlexRow}>
          <div style={subText}>주일 예배</div>
          <div style={{ marginLeft: "15px" }}>
            <div style={subText}>1부 | 오전 9:00</div>
            <div style={subText}>2부 | 오전 11:00</div>
            <div style={subText}>3부 | 오후 1:30</div>
          </div>
        </div>
        {/* <Button style={mainButton}>새 가족 등록</Button> */}
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;

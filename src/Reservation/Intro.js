import { Wrapper, Container } from "../Style";
import Styled from "styled-components";

const ReserveButton = Styled.button`
  background-color: #5DB683;
  color: white;
  font-size: 18px;
  font-weight: 300;
  font-family: KoPubWorld Dotum Bold;
  text-align: center;
  border: 0;
  border-radius: 5px;
  width: 70px;
  height: 35px;
`;

function Intro() {
  const titleStyle = {
    color: "#000000",
    fontSize: "22px",
    fontWeight: "500",
    fontFamily: "establishRetrosansOTF",
    marginBottom: "40px",
  };

  const contentStyle = {
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "KoPubWorld Dotum Bold",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "190px",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    height: "35px",
    marginBottom: "10px",
    gap: "15px",
    justifyContent: "center",
  };

  return (
    <Wrapper>
      <Container>
        <div style={titleStyle}>시설 예약</div>
        <div style={rowStyle}>
          <div style={contentStyle}>본당</div>
          <ReserveButton
            onClick={() => {
              window.location.href = "https://booking.appointy.com/eckpc";
            }}
          >
            예약
          </ReserveButton>
        </div>
        <div style={rowStyle}>
          <div style={contentStyle}>유치부실</div>
          <ReserveButton
            onClick={() => {
              window.location.href = "https://booking.appointy.com/eckpc";
            }}
          >
            예약
          </ReserveButton>
        </div>
        <div style={rowStyle}>
          <div style={contentStyle}>소예배실 (아동부실)</div>
          <ReserveButton
            onClick={() => {
              window.location.href = "https://booking.appointy.com/eckpc";
            }}
          >
            예약
          </ReserveButton>
        </div>
        <div style={rowStyle}>
          <div style={contentStyle}>교육관 1층 (체육관)</div>
          <ReserveButton
            onClick={() => {
              window.location.href = "https://booking.appointy.com/eckpc2";
            }}
          >
            예약
          </ReserveButton>
        </div>
        <div style={rowStyle}>
          <div style={contentStyle}>교육관 2층 1 (찬양대실)</div>
          <ReserveButton
            onClick={() => {
              window.location.href = "https://booking.appointy.com/eckpc2";
            }}
          >
            예약
          </ReserveButton>
        </div>
        <div style={rowStyle}>
          <div style={contentStyle}>교육관 2층 2 (세미나 룸)</div>
          <ReserveButton
            onClick={() => {
              window.location.href = "https://booking.appointy.com/eckpc2";
            }}
          >
            예약
          </ReserveButton>
        </div>
        <div style={rowStyle}>
          <div style={contentStyle}>주방</div>
          <ReserveButton
            onClick={() => {
              window.location.href = "https://booking.appointy.com/eckpc";
            }}
          >
            예약
          </ReserveButton>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Intro;

import ServiceTime from "../images/serviceTime.png";
import ChurchMap from "../images/churchMap.png";
import { Container, Label, device } from "../Style";
import Styled from "styled-components";

const ImageContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media ${device.lg} {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const StyledImage = Styled.img`
  width: 100%;
  max-width: 45%;
  height: auto;
  object-fit: contain;

  @media ${device.lg} {
    max-width: 500px;
  }
`;

const StyledImage2 = Styled.img`
  width: 100%;
  max-width: 45%;
  height: auto;
  object-fit: contain;

  @media ${device.lg} {
    max-width: 400px;
  }
`;

function Service() {
  return (
    <Container>
      <div style={{ ...Label, textAlign: "center", marginBottom: "50px" }}>
        예배 안내
      </div>
      <ImageContainer>
        <StyledImage src={ServiceTime} />
        <StyledImage2 src={ChurchMap} />
      </ImageContainer>
    </Container>
  );
}

export default Service;

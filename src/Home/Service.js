import ChurchMap from "../images/churchMap.png";
import ServiceTimeTable from "../Service/ServiceTimeTable";
import { Container, Label, device } from "../Style";
import Styled from "styled-components";

const ImageContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media ${device.lg} {
    flex-direction: column;
    gap: 50px;
  }
`;

const StyledImage = Styled.div`
  width: 100%;
  max-width: 45%;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media ${device.lg} {
    max-width: 640px;
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
        <StyledImage>
          <ServiceTimeTable />
        </StyledImage>
        <StyledImage2 src={ChurchMap} />
      </ImageContainer>
    </Container>
  );
}

export default Service;

import Grid from "@mui/material/Grid2";
import { Container, Label, FlexRow } from "@/Style";

import worship from "@/assets/images/worship.png";
import announce from "@/assets/images/announce.png";
import live from "@/assets/images/live.png";
import baptize from "@/assets/images/baptize.png";
import arrowLeft from "@/assets/images/arrowLeft.png";
import arrowRight from "@/assets/images/arrowRight.png";

import Styled from "styled-components";

const labelButtonCss = {
  width: "25px",
  cursor: "pointer",
};

const imageContainer = {
  margin: "auto",
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const imageCss = {
  width: "80px",
};

const imageLabel = {
  color: "#000000",
  fontSize: "18px",
  marginTop: "80px",
  fontWeight: "600",
  fontFamily: "KoPubWorld Dotum Bold",
  textAlign: "center",
};

const ExplorerContainer = Styled(Container)`
  padding-top: 0;
  padding-bottom: 50px;
`;

function Explorer() {
  const list = [
    { label: "예배 일정", imgAlt: "Worship", imgSrc: worship },
    { label: "행사 참여 소식", imgAlt: "Announce", imgSrc: announce },
    { label: "최근 예배 라이브", imgAlt: "Live", imgSrc: live },
    { label: "세례 안내", imgAlt: "Baptize", imgSrc: baptize },
  ];

  const Card = Styled.div`
    display: flex;
    background-color: #F5F6F6;
    border-radius: 30px;
    height: 400px;
    width: 100%;
    cursor: pointer;
  `;

  const getCards = () => {
    return list.map((l) => {
      return (
        <Grid size={{ xs: 6, md: 3 }} style={FlexRow}>
          <Card>
            <div style={imageContainer}>
              <img src={l.imgSrc} alt={l.imgAlt} style={imageCss} />
              <div style={imageLabel}>{l.label}</div>
            </div>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <ExplorerContainer>
      {/* <div style={{ ...FlexRow, marginBottom: '25px' }}>
        <div style={Label}>Explore</div>
        <div style={{ ...FlexRow, gap: '5px', marginLeft: 'auto' }}>
          <img src={arrowLeft} alt={'ArrowLeft'} style={labelButtonCss} />
          <img src={arrowRight} alt={'ArrowRight'} style={labelButtonCss} />
        </div>
      </div>
      <Grid container spacing={4}>
        {getCards()}
      </Grid> */}
    </ExplorerContainer>
  );
}

export default Explorer;

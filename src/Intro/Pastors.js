import Grid from "@mui/material/Unstable_Grid2";
import pastor_yh from "../images/pastor_yh.jpg";
import pastor_jy from "../images/pastor_jy.jpg";
import pastor_sj from "../images/pastor_sj.jpeg";
import pastor_pr from "../images/pastor_pr.jpeg";
import {
  Container,
  Label,
  FlexColumn,
  GREY_BG_COLOR,
  ContentBold,
} from "../Style";

const Pastors = () => {
  const pastors = [
    { name: "최요한 목사(행정, 청년부)", img: pastor_yh },
    { name: "유지영 목사(유아, 유치부)", img: pastor_jy },
    { name: "이수지 전도사", img: pastor_sj },
    { name: "유푸름 전도사", img: pastor_pr },
  ];

  const getCards = (ps) => {
    return ps.map((p) => (
      <Grid xs={12} md={6}>
        <div style={FlexColumn}>
          <img src={p.img} alt={"pastor"} style={{ borderRadius: "8px" }} />
          <div
            style={{
              ...ContentBold,
              textAlign: "center",
              fontSize: "15px",
              marginTop: "15px",
            }}
          >
            {p.name}
          </div>
        </div>
      </Grid>
    ));
  };

  return (
    <Container style={{ backgroundColor: GREY_BG_COLOR }}>
      <div style={{ ...Label, textAlign: "center", marginBottom: "50px" }}>
        섬기는 사람들
      </div>
      <Grid container spacing={8}>
        {getCards(pastors)}
      </Grid>
    </Container>
  );
};

export default Pastors;

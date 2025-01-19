import Grid from '@mui/material/Unstable_Grid2';
import pastor_bs from '../images/pastor_bs.jpg';
import pastor_yh from '../images/pastor_yh.jpg';
import pastor_jy from '../images/pastor_jy.jpg';
// import pastor_sj from '../images/pastor_sj.jpeg';
import {
  Container,
  Label,
  FlexColumn,
  GREY_BG_COLOR, ContentBold
} from '../Style';

const Pastors = () => {
  const pastors = [
    { name: '윤병섭 목사', img: pastor_bs },
    { name: '최요한 목사', img: pastor_yh },
    { name: '유지영 목사', img: pastor_jy },
    // { name: '이수지 전도사', img: pastor_sj },
  ];

  const getCards = (ps) => {
    return ps.map((p) => (
      <Grid xs={12} md={4}>
        <div style={FlexColumn}>
          <img src={p.img} alt={'pastor'} style={{ borderRadius: '8px' }} />
          <div style={{ ...ContentBold, textAlign: 'center', fontSize: '15px', marginTop: '15px' }}>{p.name}</div>
        </div>
      </Grid>
    ));
  };

  return (
    <Container style={{ backgroundColor: GREY_BG_COLOR }}>
      <div style={{ ...Label, textAlign: 'center', marginBottom: '50px' }}>섬기는 사람들</div>
      <Grid container spacing={8}>
        {getCards(pastors)}
      </Grid>
    </Container>
  );
};

export default Pastors;

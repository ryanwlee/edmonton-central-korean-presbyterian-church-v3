import Grid from '@mui/material/Unstable_Grid2';
import dummy2 from '../images/dummy2.png';
import {
  Container,
  Label,
  GreenLine,
  ContentBoldGreen,
  FlexColumn,
  ContentMedium,
} from '../Style';

const Pastors = () => {
  const pastors = [
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
  ];

  const pastors2 = [
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
    { name: '홍길동 목사', org: '소속' },
  ];

  const getCards = (ps) => {
    return ps.map((p) => (
      <Grid xs={6} md={3}>
        <div style={FlexColumn}>
          <img src={dummy2} alt={'Dummy2'} />
          <div style={{ ...Label, textAlign: 'center' }}>{p.name}</div>
          <div style={{ ...ContentMedium, textAlign: 'center' }}>{p.org}</div>
        </div>
      </Grid>
    ));
  };

  return (
    <div style={Container}>
      <div style={{ ...Label, textAlign: 'center' }}>교역자 소개</div>
      <div
        style={{
          ...GreenLine,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '80px',
        }}
      />
      <div
        style={{
          ...ContentBoldGreen,
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        교역자
      </div>
      <Grid container spacing={8}>
        {getCards(pastors)}
      </Grid>
      <div
        style={{
          ...GreenLine,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '80px',
        }}
      />
      <div
        style={{
          ...ContentBoldGreen,
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        전도사
      </div>
      <Grid container spacing={8}>
        {getCards(pastors2)}
      </Grid>
    </div>
  );
};

export default Pastors;

import Grid from '@mui/material/Unstable_Grid2';
import {
  wrapper,
  title,
  secondaryTitle,
  pastorsCard,
  pastorCard,
  pastorImg,
  pastorName,
  pastorOrg,
  greenLine,
} from './PastorsCss';
import dummy2 from '../images/dummy2.png';

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
      <Grid xs={6} md={3} style={pastorsCard}>
        <div style={pastorCard}>
          <img src={dummy2} alt={'Dummy2'} style={pastorImg} />
          <div style={pastorName}>{p.name}</div>
          <div style={pastorOrg}>{p.org}</div>
        </div>
      </Grid>
    ));
  };

  return (
    <div style={wrapper}>
      <div style={title}>교역자 소개</div>
      <div style={greenLine} />
      <div style={secondaryTitle}>교역자</div>
      <Grid container spacing={8}>
        {getCards(pastors)}
      </Grid>
      <div style={greenLine} />
      <div style={secondaryTitle}>전도사</div>
      <Grid container spacing={8}>
        {getCards(pastors2)}
      </Grid>
    </div>
  );
};

export default Pastors;

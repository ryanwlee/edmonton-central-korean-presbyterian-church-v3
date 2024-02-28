import { heroContent, mainText, subText, mainButton } from './HeroCss';
import hero from '../images/hero.png';
import Button from '@mui/material/Button';
import Styled from 'styled-components';

function Hero() {
  const Container = Styled.div`
    background-image: url(${hero});
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    height: 1600px;
    display: flex;
    padding-left: 80px;

    @media (max-width: 3000px) {
      background-size: auto 1400px;
      height: 1400px;
    }

    @media (max-width: 2300px) {
      background-size: auto 1100px;
      height: 1100px;
    }

    @media (max-width: 1900px) {
      background-size: auto 900px;
      height: 900px;
    }

    @media (max-width: 1700px) {
      background-size: auto 800px;
      height: 800px;
    }

    @media (max-width: 1500px) {
      background-size: auto 700px;
      height: 700px;
    }

    @media (max-width: 1200px) {
      background-size: auto 600px;
      height: 600px;
    }

    @media (max-width: 850px) {
      background-size: auto 400px;
      height: 400px;
    }
  `;

  return (
    <Container>
      <div style={heroContent}>
        <div style={mainText}>메인 텍스트</div>
        <div style={subText}>주일 예배 | 오전 11:00</div>
        <Button style={mainButton}>새 가족 등록</Button>
      </div>
    </Container>
  );
}

export default Hero;

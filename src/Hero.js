import {
  container,
  heroContent,
  mainText,
  subText,
  mainButton,
  heroImage,
} from './HeroCss';
import hero from './images/hero.png';
import Button from '@mui/material/Button';

function Hero() {
  return (
    <div style={container}>
      <img src={hero} alt='Hero' style={heroImage} />
      <div style={heroContent}>
        <div style={mainText}>메인 텍스트</div>
        <div style={subText}>주일 예배 | 오전 11:00</div>
        <Button style={mainButton}>새 가족 등록</Button>
      </div>
    </div>
  );
}

export default Hero;

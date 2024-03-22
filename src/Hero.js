import hero from './images/hero.png';
import Button from '@mui/material/Button';

const container = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const heroContent = {
  position: 'absolute',
  left: '80px',
};

const mainText = {
  color: '#FFFFFF',
  fontSize: '40px',
  marginBottom: '10px',
  fontWeight: '600',
  fontFamily: 'establishRetrosansOTF',
};

const subText = {
  color: '#FFFFFF',
  fontSize: '22px',
  marginBottom: '30px',
  fontWeight: '600',
  fontFamily: 'KoPubWorld Dotum Bold',
};

const mainButton = {
  backgroundColor: '#5DB683',
  color: '#FFFFFF',
  borderRadius: '100px',
  fontSize: '22px',
  width: '200px',
  height: '60px',
  fontWeight: '600',
  fontFamily: 'KoPubWorld Dotum Bold',
};

const heroImage = {
  width: '100%',
  height: 'auto',
  display: 'block',
};

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

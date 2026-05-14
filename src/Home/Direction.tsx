/* eslint-disable jsx-a11y/iframe-has-title */
import Pin from '../images/pin.png';
import { Label, ContentBold, Container, GREY_BG_COLOR } from '../Style';

// const Container = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
// };

const pinCss = {
  height: '20px',
};

const AddressContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  gap: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
};

function Direction() {
  return (
    <Container style={{ backgroundColor: GREY_BG_COLOR }}>
      <div style={Label}>오시는 길</div>
      <div style={AddressContainer}>
        <img src={Pin} alt={'Pin'} style={pinCss} />
        <div style={ContentBold}>2551 Ellwood Dr SW, Edmonton, AB T6X 0P7</div>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19017.394271747984!2d-113.472585!3d53.429592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01e985c81374d%3A0xf0cee281dde253b7!2sEdmonton%20Central%20Korean%20Presbyterian%20Church!5e0!3m2!1sen!2sca!4v1709071039391!5m2!1sen!2sca'
        width='100%'
        height='400'
        style={{ border: 0, marginTop: '40px' }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </Container>
  );
}

export default Direction;

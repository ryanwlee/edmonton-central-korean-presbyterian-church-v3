/* eslint-disable jsx-a11y/iframe-has-title */
import {
  container,
  labelCss,
  address,
  pinCss,
  addressContainer,
} from './DirectionCss';
import Pin from '../images/pin.png';

function Direction() {
  return (
    <div style={container}>
      <div style={labelCss}>오시는 길</div>
      <div style={addressContainer}>
        <img src={Pin} alt={'Pin'} style={pinCss} />
        <div style={address}>2551 Ellwood Dr SW, Edmonton, AB T6X 0P7</div>
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
    </div>
  );
}

export default Direction;

import ServiceInfo from '../images/ServiceInfo.png';
import {
  Container, Label
} from '../Style';
import Styled from 'styled-components';

function Service() {
  return (
    <Container>
      <div style={{ ...Label, textAlign: 'center', marginBottom: '50px' }}>예배 안내</div>
      <img src={ServiceInfo} style={{ width: '100%', maxWidth: '800px' }} />
    </Container>
  );
}

export default Service;

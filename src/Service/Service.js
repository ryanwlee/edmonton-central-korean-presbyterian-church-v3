import Styled from 'styled-components';
import ServiceIntro from './ServiceIntro';

const Wrapper = Styled.div`
  display: flex;
  gap: 150px;
  flex-direction: column;
`;

function Service() {
  return (
    <Wrapper>
      <ServiceIntro />
    </Wrapper>
  );
}

export default Service;

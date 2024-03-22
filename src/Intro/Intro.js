import Styled from 'styled-components';
import Title from './Title';
import Pastor from './Pastor';
import Pastors from './Pastors';
import Church from './Church';

const Wrapper = Styled.div`
  display: flex;
  gap: 150px;
  flex-direction: column;
`;

function Intro() {
  return (
    <Wrapper>
      <Title />
      <Pastor />
      <Pastors />
      <Church />
    </Wrapper>
  );
}

export default Intro;

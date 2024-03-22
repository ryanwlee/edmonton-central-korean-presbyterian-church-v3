import Styled from 'styled-components';
import Title from './Title';
import Pastor from './Pastor';
import Pastors from './Pastors';
import Church from './Church';
import { Wrapper } from '../Style';

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

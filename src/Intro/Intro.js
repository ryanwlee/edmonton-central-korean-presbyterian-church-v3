import Pastor from './Pastor';
import Pastors from './Pastors';
import History1980 from './History1980';
import History1990 from './History1990';
import History2000 from './History2000';
import History2010 from './History2010';
import History2020 from './History2020';
import { Wrapper } from '../Style';

function Intro() {
  return (
    <Wrapper>
      <Pastor />
      <Pastors />
      <History1980 />
      <History1990 />
      <History2000 />
      <History2010 />
      <History2020 />
    </Wrapper>
  );
}

export default Intro;

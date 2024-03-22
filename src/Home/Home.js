import Explorer from './Explorer';
import MonthVerse from './MonthVerse';
import Direction from './Direction';
import { Wrapper } from '../Style';

function Home() {
  return (
    <Wrapper>
      <Explorer />
      <MonthVerse />
      <Direction />
    </Wrapper>
  );
}

export default Home;

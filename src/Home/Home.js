import Hero from './Hero';
import Explorer from './Explorer';
import MonthVerse from './MonthVerse';
import Direction from './Direction';
import { container } from './HomeCss';

function Home() {
  return (
    <div style={container}>
      <Hero />
      <Explorer />
      <MonthVerse />
      <Direction />
    </div>
  );
}

export default Home;

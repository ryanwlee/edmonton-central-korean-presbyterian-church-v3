import Pastor from "@/pages/Intro/Pastor";
import Pastors from "@/pages/Intro/Pastors";
import { Wrapper, Container } from "@/Style";
import HistoryHandler from "@/pages/Intro/HistoryHandler";
import HistoryData from "@/data/history";

function Intro() {
  return (
    <Wrapper>
      <Pastor />
      <Pastors />
      <Container>
        <HistoryHandler
          data={HistoryData[1980]}
          initialYear={1988}
          shortInitialYear={80}
          initialShow={true}
        />
        <HistoryHandler
          data={HistoryData[1990]}
          initialYear={1990}
          shortInitialYear={0}
          initialShow={false}
        />
        <HistoryHandler
          data={HistoryData[2000]}
          initialYear={2000}
          shortInitialYear={0}
          initialShow={false}
        />
        <HistoryHandler
          data={HistoryData[2010]}
          initialYear={2010}
          shortInitialYear={0}
          initialShow={false}
        />
        <HistoryHandler
          data={HistoryData[2020]}
          initialYear={2020}
          shortInitialYear={0}
          initialShow={false}
        />
      </Container>
    </Wrapper>
  );
}

export default Intro;

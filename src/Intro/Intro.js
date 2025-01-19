import Pastor from "./Pastor";
import Pastors from "./Pastors";
import { Wrapper, Container } from "../Style";
import HistoryHandler from "./HistoryHandler";
import HistoryData from "./HistoryData";

import Styled from "styled-components";

const HistoryContainer = Styled.div` 
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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

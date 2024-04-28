import LeftArrow from '../images/LeftArrow.png';
import RightArrow from '../images/RightArrow.png';
import doublequote from '../images/doublequote.png';
import {
  Container,
  GREY_BG_COLOR,
  LeftArrowButtonCss,
  RightArrowButtonCss,
  Label,
  Content,
  device,
} from '../Style';
import Styled from 'styled-components';

const Doublequote = Styled.img`
  position: relative;
  top: 20px;
  width: 40px;
  left: 10%;
`;

const VerseContainer = Styled.div`
  text-align: center;
`;

const MonthVerseContainer = Styled(Container)`
  background-color: ${GREY_BG_COLOR};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function MonthVerse() {
  const list = [
    {
      label: '3월 요절 말씀',
      verse:
        '네 마음을 다하고 목숨을 다하고 뜻을 다하고 힘을 다하여 주 너의 하나님을 사랑하라 하신 것이요 둘째는 이것이니 네 이웃을 네 자신과 같이 사랑하라 하신 것이라 이보다 더 큰 계명이 없느니라',
      verseInfo: '마가복음 12:30-31',
    },
  ];

  const getList = () => {
    return list.map((l) => {
      return (
        <div>
          <div style={Label}>{l.label}</div>
          <div style={{ ...Content, marginTop: '30px', maxWidth: '600px' }}>
            {l.verse}
          </div>
          <div style={{ ...Content, marginTop: '30px' }}>{l.verseInfo}</div>
        </div>
      );
    });
  };
  return (
    <div>
      <Doublequote src={doublequote} alt={'DoubleQuote'} />
      <MonthVerseContainer>
        {/* <img src={RightArrow} alt={'RightArrow'} style={LeftArrowButtonCss} /> */}
        <VerseContainer>{getList()}</VerseContainer>
        {/* <img src={LeftArrow} alt={'LeftArrow'} style={RightArrowButtonCss} /> */}
      </MonthVerseContainer>
    </div>
  );
}

export default MonthVerse;

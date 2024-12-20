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
      label: '8월 요절 말씀',
      verse:
        '우리를 거스르고 불리하게 하는 법조문으로 쓴 증서를 지우시고 제하여 버리사 십자가에 못 박으시고 통치자들과 권세들을 무력화하여 드러내어 구경거리로 삼으시고 십자가로 그들을 이기셨느니라',
      verseInfo: '골 2:14-15',
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

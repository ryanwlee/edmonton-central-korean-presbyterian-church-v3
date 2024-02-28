import {
  container,
  leftArrowButtonCss,
  rightArrowButtonCss,
  verseContainer,
  labelCss,
  verseCss,
  verseInfoCss,
  doublequotecss,
} from './MonthVerseCss';
import LeftArrow from '../images/LeftArrow.png';
import RightArrow from '../images/RightArrow.png';
import doublequote from '../images/doublequote.png';

function MonthVerse() {
  const list = [
    {
      label: '3월 요절 말씀',
      verse:
        '네 마음을 다하고 목숨을 다하고 뜻을 다하고 힘을 다하여 주 너의 하나님을 사랑하라 하신 것이요\n둘째는 이것이니 네 이웃을 네 자신과 같이 사랑하라 하신 것이라\n이보다 더 큰 계명이 없느니라',
      verseInfo: '마가복음 12:30-31',
    },
  ];

  const getList = () => {
    return list.map((l) => {
      return (
        <div>
          <div style={labelCss}>{l.label}</div>
          <pre style={verseCss}>{l.verse}</pre>
          <div style={verseInfoCss}>{l.verseInfo}</div>
        </div>
      );
    });
  };
  return (
    <div style={container}>
      <img src={doublequote} alt={'DoubleQuote'} style={doublequotecss} />
      <img src={RightArrow} alt={'RightArrow'} style={leftArrowButtonCss} />
      <div style={verseContainer}>{getList()}</div>
      <img src={LeftArrow} alt={'LeftArrow'} style={rightArrowButtonCss} />
    </div>
  );
}

export default MonthVerse;

import firstFloor from '../images/1stFloor.png';
import LeftArrow from '../images/LeftArrow.png';
import RightArrow from '../images/RightArrow.png';
import {
  Container,
  FlexColumn,
  FlexRow,
  Label,
  LeftArrowButtonCss,
  RightArrowButtonCss,
} from '../Style';

const imgContainer = {
  textAlign: 'center',
};

function Church() {
  const list = [{ imgAlt: 'Worship', imgSrc: firstFloor }];

  const getList = () => {
    return list.map((l) => {
      return <img src={l.imgSrc} alt={l.imgAlt} />;
    });
  };
  return (
    <div style={{ ...Container, ...FlexColumn, backgroundColor: '#F5F6F6' }}>
      <div style={{ ...Label, textAlign: 'center' }}>교역자 소개</div>
      <div style={{ ...FlexRow, alignItems: 'center' }}>
        <img src={RightArrow} alt={'RightArrow'} style={LeftArrowButtonCss} />
        <div style={imgContainer}>{getList()}</div>
        <img src={LeftArrow} alt={'LeftArrow'} style={RightArrowButtonCss} />
      </div>
    </div>
  );
}

export default Church;

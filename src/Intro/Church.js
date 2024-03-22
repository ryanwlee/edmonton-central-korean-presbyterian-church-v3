import firstFloor from '../images/1stFloor.png';
import LeftArrow from '../images/LeftArrow.png';
import RightArrow from '../images/RightArrow.png';

const container = {
  backgroundColor: '#F5F6F6',
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingTop: '120px',
  paddingBottom: '120px',
  display: 'flex',
  flexDirection: 'column',
};

export const title = {
  color: '#353535',
  fontSize: '22px',
  fontWeight: '500',
  fontFamily: 'establishRetrosansOTF',
  textAlign: 'center',
};

const mapContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const leftArrowButtonCss = {
  height: '50px',
  marginRight: 'auto',
};

const rightArrowButtonCss = {
  height: '50px',
  marginLeft: 'auto',
};

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
    <div style={container}>
      <div style={title}>교역자 소개</div>
      <div style={mapContainer}>
        <img src={RightArrow} alt={'RightArrow'} style={leftArrowButtonCss} />
        <div style={imgContainer}>{getList()}</div>
        <img src={LeftArrow} alt={'LeftArrow'} style={rightArrowButtonCss} />
      </div>
    </div>
  );
}

export default Church;

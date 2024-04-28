import { Height, Widgets } from '@mui/icons-material';
import {
  Container,
  FlexRow,
  FlexColumn,
  ContentMedium,
  ContentBold,
  ContentBoldGreen,
} from '../Style';
import Date from '../images/date.png';

const title = {
  color: '#000000',
  fontSize: '22px',
  fontWeight: '500',
  fontFamily: 'establishRetrosansOTF',
  marginBottom: '40px',
};

const date = {
  background: `url(${Date})`,
  backgroundRepeat: 'no-repeat',
  ...FlexColumn,
  height: '150px',
  width: '150px',
  backgroundSize: 'contain',
};

const dateText = {
  ...ContentBold,
  color: '#FFFFFF',
  fontSize: '22px',
  marginTop: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontWeight: '800',
};

const dateNumber = {
  ...ContentBold,
  color: '#FFFFFF',
  fontSize: '40px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 'auto',
};

const content = {
  marginLeft: '40px',
};

const Events = () => {
  return (
    <Container>
      <div style={title}>다가오는 행사</div>
      <div style={FlexRow}>
        <div style={date}>
          <div style={dateText}>MAR</div>
          <div style={dateNumber}>10</div>
        </div>
        <div style={content}>
          <div
            style={{ ...ContentBoldGreen, textAlign: 'left', fontSize: '22px' }}
          >
            이벤트 타이틀
          </div>
          <div style={{ ...ContentMedium, marginBottom: '15px' }}>
            위치 입력
          </div>
          <div style={ContentMedium}>짧은 설명을 입력해주세요.</div>
        </div>
      </div>
    </Container>
  );
};

export default Events;

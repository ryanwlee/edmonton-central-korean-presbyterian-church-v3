import dummy1 from '../images/dummy1.png';
import {
  Container,
  FlexRow,
  FlexColumn,
  Label,
  Content,
  GreenLine,
  ContentBoldGreen,
} from '../Style';

const pastorImg = {
  width: '20%',
  maxWidth: '20%',
  height: 'auto',
};

const pastorNameWrapper = {
  gap: '10px',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '50px',
};

const Pastor = () => {
  return (
    <div
      style={{
        ...Container,
        ...FlexRow,
        backgroundColor: '#F5F6F6',
        justifyContent: 'center',
        gap: '40px',
      }}
    >
      <img src={dummy1} alt={'Dummy1'} style={pastorImg} />
      <div style={{ ...FlexColumn, textAlign: 'center' }}>
        <div style={Label}>EKCPC</div>
        <div style={{ ...FlexRow, ...pastorNameWrapper }}>
          <div style={{ ...Label, fontSize: '30px' }}>정동호</div>
          <div style={Label}>담임 목사님</div>
        </div>
        <div
          style={{ ...Content, whiteSpace: 'pre-line', marginBottom: '80px' }}
        >
          네 마음을 다하고 목숨을 다하고 뜻을 다하고 힘을 다하여 주 너의
          하나님을 사랑하라 하신 것이요{'\n'}둘째는 이것이니 네 이웃을 네 자신과
          같이 사랑하라 하신 것이라{'\n'}이보다 더 큰 계명이 없느니라&nbsp; 주
          너의 하나님을 사랑하라 하신 것이요{'\n'}둘째는 이것이니 네 이웃을 네
          자신과 같이 사랑하라 하신 것이라
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '50px',
          }}
        >
          <div style={FlexColumn}>
            <div style={GreenLine} />
            <div style={FlexRow}>
              <div style={{ ...ContentBoldGreen, marginRight: '60px' }}>
                경력
              </div>
              <div
                style={{
                  ...Content,
                  whiteSpace: 'pre-line',
                  textAlign: 'left',
                }}
              >
                공무원의 신분과 정치적 중립성은 법률이{'\n'}누구든지 체포 또는
                구속을 당한 때에는 적부의 심사를{'\n'}대통령은
                국무총리·국무위원·행정각부의 장 기타 법률이 정하는
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '50px',
          }}
        >
          <div style={FlexColumn}>
            <div style={GreenLine} />
            <div style={FlexRow}>
              <div style={{ ...ContentBoldGreen, marginRight: '60px' }}>
                학력
              </div>
              <div
                style={{
                  ...Content,
                  whiteSpace: 'pre-line',
                  textAlign: 'left',
                }}
              >
                공무원의 신분과 정치적 중립성은 법률이{'\n'}누구든지 체포 또는
                구속을 당한 때에는 적부의 심사를{'\n'}대통령은
                국무총리·국무위원·행정각부의 장 기타 법률이 정하는
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pastor;

import {
  pastorWrapper,
  pastorImg,
  pastorContentWrapper,
  pastorNameWrapper,
  pastorTitle1,
  pastorTitle2,
  pastorTitle3,
  pastorDescription,
  greenWrapper,
  greenLine,
  pastorDescriptionWrapper,
  pastorDescriptionHeader,
  pastorDescriptionContent,
} from './IntroCss';
import dummy1 from '../images/dummy1.png';

const Pastor = () => {
  return (
    <div style={pastorWrapper}>
      <img src={dummy1} alt={'Dummy1'} style={pastorImg} />
      <div style={pastorContentWrapper}>
        <div style={pastorTitle1}>EKCPC</div>
        <div style={pastorNameWrapper}>
          <div style={pastorTitle2}>정동호</div>
          <div style={pastorTitle3}>담임 목사님</div>
        </div>
        <div style={pastorDescription}>
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
          <div style={greenWrapper}>
            <div style={greenLine} />
            <div style={pastorDescriptionWrapper}>
              <div style={pastorDescriptionHeader}>경력</div>
              <div style={pastorDescriptionContent}>
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
          <div style={greenWrapper}>
            <div style={greenLine} />
            <div style={pastorDescriptionWrapper}>
              <div style={pastorDescriptionHeader}>학력</div>
              <div style={pastorDescriptionContent}>
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

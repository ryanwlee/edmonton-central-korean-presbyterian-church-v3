import { Container, LabelGreen, FlexColumn, ContentMedium } from '../Style';

const Title = () => {
  return (
    <div style={{ ...Container, textAlign: 'center' }}>
      <div style={LabelGreen}>에드몬톤 중앙 장로 교회</div>
      <div style={LabelGreen}>Edmonton Korean Central Presbyterian Church</div>
      <div
        style={{
          ...FlexColumn,
          gap: '20px',
          marginTop: '50px',
          marginLeft: '15%',
          marginRight: '15%',
        }}
      >
        <div style={ContentMedium}>
          헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은
          즉시 이를 공포하여야 한다. 이 헌법시행 당시에 이 헌법에 의하여 새로
          설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여
          새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다.
        </div>
        <div style={ContentMedium}>
          대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다. 계엄을
          선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 탄핵소추의
          의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.
        </div>
      </div>
    </div>
  );
};

export default Title;

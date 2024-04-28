import { Container, device } from '../Style';
import Styled from 'styled-components';

const serviceTitle = {
  color: '#000000',
  fontSize: '22px',
  fontWeight: '500',
  fontFamily: 'establishRetrosansOTF',
  marginBottom: '40px',
};

const ServiceDay = Styled.div`
  color: #5DB683;
  font-size: 18px;
  font-weight: 300;
  font-family: KoPubWorld Dotum Bold;
  text-align: left;
  min-width: 120px;
  max-width: 120px;
`;

const ServiceInfo = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  color: #353535;
  font-size: 18px;
  font-weight: 300;
  font-family: KoPubWorld Dotum Medium;
  gap: 10px;
  text-align: left;

  @media ${device.lg} {
    margin-left: 0;
  }
`;

const ServiceInfoRow = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media ${device.lg} {
    margin-bottom: 20px;
  }
`;

const ServiceInfoTime = Styled.div`
  min-width: 180px;
  max-width: 180px;

  @media ${device.sm} {
    min-width: 120px;
    max-width: 120px;
  }
`;

const ContentColumn = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media ${device.lg} {
    flex-direction: column;
    gap: 80px;
  }
`;

const ContentSubColumn = Styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: #353535;
  font-size: 18px;
  font-weight: 300;
  font-family: KoPubWorld Dotum Medium;
  gap: 0;
  margin-left: 0;
  margin-right: 0;

  @media ${device.lg} {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }
`;

const ServiceInfoLine = Styled.div`
  margin-bottom: 20px;

  @media ${device.lg} {
    margin-bottom: 20px;
  }
`;

const ContentRowCenter = Styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.sm} {
    flex-direction: column;
    gap: 20px;
  }
`;

const GreenLine = Styled.div`
  border-top: 4px solid #5DB683;
  height: 5px;
  width: 26px;
`;

const GreenLineWithMargin = Styled.div`
  border-top: 4px solid #5DB683;
  height: 5px;
  width: 26px;
  margin-top: 40px;
`;

const ServiceIntro = () => {
  return (
    <Container>
      <div style={serviceTitle}>예배 안내</div>
      <ContentColumn>
        <ContentSubColumn>
          <ServiceInfoLine>
            • 주일예배는 온 가족이 한 자리에 모여서 진실되게 하나님을
            예배합니다.
          </ServiceInfoLine>
          <ServiceInfoLine>
            <div>• 교회 사무실 열려있는 시간</div>
            <div style={{ fontWeight: '800', marginLeft: '12px' }}>
              화, 수, 목, 금 오전 9:30 ~ 오후 4:00
            </div>
          </ServiceInfoLine>
          <ServiceInfoLine>
            • 교역자의 도움이 필요한 경우 언제든지 연락주시기 바랍니다.
          </ServiceInfoLine>
          <ServiceInfoLine>
            • 헌금은 소지하고 있는 헌금 봉투에 담아 정성껏 하나님께 봉헌합니다.
          </ServiceInfoLine>
          <ServiceInfoLine>
            • 어려운 시기를 잘 극복하고 이길 수 있도록 깨어 기도에 힘쓰시기
            바랍니다.
          </ServiceInfoLine>
          <ServiceInfoLine>
            <div>• 온라인 예배: 교회 유튜브 채널에서 보실 수 있습니다.</div>
            <div style={{ fontWeight: '800', marginLeft: '12px' }}>
              <a href='https://www.youtube.com/channel/UCzz-Hi9PzGYiQE0zEOn8idg/live'>
                라이브 방송 보기
              </a>
            </div>
          </ServiceInfoLine>
          <ServiceInfoLine>
            • Grace Central Church: Sunday Worship Service 1 pm
          </ServiceInfoLine>
        </ContentSubColumn>
        <ContentSubColumn>
          <GreenLine />
          <ContentRowCenter>
            <ServiceDay>주일</ServiceDay>
            <ServiceInfo>
              <ServiceInfoRow>
                <ServiceInfoTime>1부</ServiceInfoTime>
                <ServiceInfoTime>오전 9시</ServiceInfoTime>
              </ServiceInfoRow>
              <ServiceInfoRow>
                <ServiceInfoTime>2부</ServiceInfoTime>
                <ServiceInfoTime>오전 11시, 온라인</ServiceInfoTime>
              </ServiceInfoRow>
              <ServiceInfoRow>
                <ServiceInfoTime>3부</ServiceInfoTime>
                <ServiceInfoTime>오후 1시 30분</ServiceInfoTime>
              </ServiceInfoRow>
              <ServiceInfoRow>
                <ServiceInfoTime>영유아, 유치부</ServiceInfoTime>
                <ServiceInfoTime>오전 11시</ServiceInfoTime>
              </ServiceInfoRow>
              <ServiceInfoRow>
                <ServiceInfoTime>아동부</ServiceInfoTime>
                <ServiceInfoTime>오전 11시</ServiceInfoTime>
              </ServiceInfoRow>
              <ServiceInfoRow>
                <ServiceInfoTime>중, 고등부</ServiceInfoTime>
                <ServiceInfoTime>오전 11시</ServiceInfoTime>
              </ServiceInfoRow>
              <ServiceInfoRow>
                <ServiceInfoTime>한글 학교</ServiceInfoTime>
                <ServiceInfoTime>오전 10시</ServiceInfoTime>
              </ServiceInfoRow>
            </ServiceInfo>
          </ContentRowCenter>
          <GreenLineWithMargin />
          <ContentRowCenter>
            <ServiceDay>토요일</ServiceDay>
            <ServiceInfo>
              <ServiceInfoRow>
                <ServiceInfoTime>청년부 예배</ServiceInfoTime>
                <ServiceInfoTime>오후 6시 30분</ServiceInfoTime>
              </ServiceInfoRow>
            </ServiceInfo>
          </ContentRowCenter>

          <GreenLineWithMargin />
          <ContentRowCenter>
            <ServiceDay>수요일</ServiceDay>
            <ServiceInfo>
              <ServiceInfoRow>
                <ServiceInfoTime>수요 예배</ServiceInfoTime>
                <ServiceInfoTime>오후 7시 30분</ServiceInfoTime>
              </ServiceInfoRow>
            </ServiceInfo>
          </ContentRowCenter>

          <GreenLineWithMargin />
          <ContentRowCenter>
            <ServiceDay>화 ~ 토요일</ServiceDay>
            <ServiceInfo>
              <ServiceInfoRow>
                <ServiceInfoTime>새벽 기도</ServiceInfoTime>
                <ServiceInfoTime>오전 6시</ServiceInfoTime>
              </ServiceInfoRow>
            </ServiceInfo>
          </ContentRowCenter>
        </ContentSubColumn>
      </ContentColumn>
    </Container>
  );
};

export default ServiceIntro;

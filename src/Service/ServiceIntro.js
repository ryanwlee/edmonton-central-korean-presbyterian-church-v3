import { Container, device } from '../Style';
import Styled from 'styled-components';
import ServiceImg from '../images/ServiceInfo.png'

const serviceTitle = {
  color: '#000000',
  fontSize: '22px',
  fontWeight: '500',
  fontFamily: 'establishRetrosansOTF',
  marginBottom: '40px',
};

const ServiceInfoLine = Styled.div`
  margin-bottom: 20px;

  @media ${device.lg} {
    margin-bottom: 20px;
  }
`;

const ServiceIntro = () => {
  return (
    <Container>
      <div style={{ marginBottom: '80px' }}>
        <div style={serviceTitle}>예배 안내</div>
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
      </div>
      <img src={ServiceImg} style={{ width: '100%', maxWidth: '800px' }} />
    </Container>
  );
};

export default ServiceIntro;

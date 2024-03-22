import { FlexRow, FlexColumn } from '../Style';

const serviceTitle = {
  color: '#000000',
  fontSize: '22px',
  fontWeight: '500',
  fontFamily: 'establishRetrosansOTF',
};

export const greenLine = {
  borderTop: '4px solid #5DB683',
  height: '5px',
  width: '26px',
};

const ServiceIntro = () => {
  return (
    <div>
      <div style={serviceTitle}>예배 안내</div>
      <div style={FlexRow}>
        <div style={FlexColumn}>
          <div>
            주일예배는 온 가족이 한 자리에 모여서 진실되게 하나님을 예배합니다.
          </div>
          <div>
            교회 사무실 열려있는 시간 화, 수, 목, 금 오전 9:30 ~ 오후 4:00
          </div>
          <div>교역자의 도움이 필요한 경우 언제든지 연락주시기 바랍니다.</div>
          <div>
            헌금은 소지하고 있는 헌금 봉투에 담아 정성껏 하나님께 봉헌합니다.
          </div>
          <div>
            어려운 시기를 잘 극복하고 이길 수 있도록 깨어 기도에 힘쓰시기
            바랍니다.
          </div>
        </div>
        <div style={FlexColumn}>
          <div style={greenLine} />
          <div style={FlexRow}>
            <div>주일</div>
            <div style={FlexColumn}>
              <div>아동부 예배</div>
              <div>주일 예배</div>
              <div>EM, YOUTH 예배</div>
            </div>
            <div style={FlexColumn}>
              <div>오전 10시</div>
              <div>오전 11시</div>
              <div>오후 1시</div>
            </div>
          </div>
          <div style={greenLine} />
          <div style={FlexRow}>
            <div>토요일</div>
            <div>청년부 예배</div>
            <div>오후 6시 30분</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;

import { Container, device } from "../Style";
import Styled from "styled-components";

const serviceTitle = {
  color: "#000000",
  fontSize: "22px",
  fontWeight: "500",
  fontFamily: "establishRetrosansOTF",
  marginBottom: "40px",
};

const border = {
  borderTop: "2px solid rgb(0, 0, 0, 0.2)",
  borderBottom: "2px solid rgb(0, 0, 0, 0.2)",
};

const grey = {
  backgroundColor: "#F5F6F6",
  display: "flex",
  flexDirection: "row",
};

const white = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "row",
};

const Half = Styled.div`
  width: 50%;
  padding: 10px;
`;

const NormalText = Styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const SmallText = Styled.div`
  color: rgb(53, 53, 53, 0.6);
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const BoldText = Styled.div`
  font-weight: 800;
  display: contents;
`;

const RedText = Styled.div`
color: #D10606;
display: contents;
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
  fontSize: 18px;
  fontWeight: 300;
  fontFamily: KoPubWorld Dotum Medium;
  gap: 0;

  @media ${device.lg} {
    width: 100%;
    gap: 40px;
  }
`;

const SubHeader = Styled.div`
  color: #5DB683;
  font-size: 18px;
  font-weight: 300;
  font-family: KoPubWorld Dotum Bold;
  text-align: left;
  margin-bottom: 20px;

  @media ${device.lg} {
    text-align: center;
  }
`;

const ContentRowCenter = Styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0;
  margin-right: 0;
  color: #353535;
  font-size: 18px;
  font-weight: 300;
  font-family: KoPubWorld Dotum Medium;

  @media ${device.lg} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const BlackButton = Styled.div`
  color: #353535;
  font-size: 18px;
  font-weight: 300;
  font-family: KoPubWorld Dotum Bold;
  text-align: center;
  background-color: #353535;
  border-radius: 40px;
  color: #FFFFFF;
  width: 60px;
  padding-top: 3px;
  padding-left: 8px;
  padding-bottom: 3px;
  padding-right: 8px;
  margin-bottom: 20px;

  @media ${device.lg} {
    display: none;
  }
`;

const Donation = () => {
  return (
    <Container>
      <div style={serviceTitle}>헌금 안내</div>
      <ContentColumn>
        <ContentSubColumn>
          <SubHeader>이메일 헌금(Interac e-Transfer)</SubHeader>
          <div style={border}>
            <div style={grey}>
              <Half>Recipient Name 받는 단체 이름</Half>
              <Half>ECKPC</Half>
            </div>
            <div style={white}>
              <Half>Recipient Email Address 받는 단체의 이메일</Half>
              <Half>eckpc1988jj@gmail.com</Half>
            </div>
            <div style={grey}>
              <Half>Amount 헌금 총액</Half>
              <Half>헌금 총액 기입</Half>
            </div>
            <div style={white}>
              <Half>Message 메시지</Half>
              <Half>
                <div>헌금하시는 분의 영문이름</div>
                <div>헌금 번호</div>
                <div>헌금 종류와 액수</div>
              </Half>
            </div>
          </div>
        </ContentSubColumn>
        <ContentSubColumn>
          <BlackButton>참 고</BlackButton>
          <ContentRowCenter>
            <div>
              <NormalText>• 모든 메시지를 영문으로 기록해야 됩니다.</NormalText>
              <NormalText>
                한글로 기록할 경우 e-transfer가 되지 않습니다.
              </NormalText>
              <div style={{ color: "#D10606" }}>
                구별된 헌금 영문은 헌금 봉투에 적혀 있는 영문을 기록하시면
                됩니다.
              </div>
              <SmallText>
                <div>
                  예시) 홍길동(헌금봉투 번호 100)의 3월 29일 헌금 십일조 $100,
                  주일헌금 $20, 감사헌금 $30, 선교헌금 $20
                </div>
                <div>
                  Hong Kil Dong, #100, March 29 Offering Tithing $100, Weekly
                  $20, Thanksgiving $30, Mission fund: $20
                </div>
              </SmallText>
            </div>
          </ContentRowCenter>
          <ContentRowCenter>
            <NormalText>
              • 만약 헌금번호가 없다면 본인의 주소와 전화번호를 기입해 주시기
              바랍니다.
            </NormalText>
          </ContentRowCenter>
          <ContentRowCenter>
            <div>
              <NormalText>
                • 비밀번호(security information)는 질문과 답을 기입하지 않아도
                자동 입금이 됩니다.
              </NormalText>
              <NormalText>
                혹시 비밀번호를 설정하신 분들은 교회 이메일
                <BoldText> eckpc1988jj@gmail.com</BoldText>로 알려주시기
                바랍니다.
              </NormalText>
            </div>
          </ContentRowCenter>
          <ContentRowCenter>
            <div>
              <NormalText>
                <BoldText>
                  • 에드몬톤 중앙교회는 어떤 상황에서도{" "}
                  <RedText>
                    개별적으로 온라인 헌금을 요구하거나 강요하지 않습니다. 만약
                    이러한 요청을 개별적으로 이메일이나 전화로 받으신 경우,
                    중앙교회를 사칭한 사기(fraud)이오니 절대 응하지 마시기
                    바랍니다.
                  </RedText>{" "}
                  이런 경우 교역자들에게 문의하시기 바랍니다.
                </BoldText>
              </NormalText>
            </div>
          </ContentRowCenter>
        </ContentSubColumn>
      </ContentColumn>
      <ContentColumn style={{ marginTop: "100px" }}>
        <ContentSubColumn>
          <SubHeader>개인 수표를 우편으로 보내는 헌금</SubHeader>
          <div style={border}>
            <div style={grey}>
              <Half>Pay to</Half>
              <Half>ECKPC</Half>
            </div>
            <div style={white}>
              <Half>Address 보내는 곳</Half>
              <Half>2551 Ellwood Dr, SW, Edmonton, AB T6X 0P7</Half>
            </div>
          </div>
        </ContentSubColumn>
        <ContentSubColumn>
          <BlackButton>참 고</BlackButton>
          <ContentRowCenter>
            <NormalText>
              • 개인 수표를 기록하여 우편으로 보내시면 됩니다.
            </NormalText>
          </ContentRowCenter>
          <ContentRowCenter>
            <NormalText>
              • 위와 같은 방법으로 헌금하기 어려운 분은 주중에 사무실에 방문하여
              교역자에게 전달 하시거나 교회당에서 다시 예배가 드려질 때 모아둔
              헌금을 드리면 됩니다.
            </NormalText>
          </ContentRowCenter>
        </ContentSubColumn>
      </ContentColumn>
    </Container>
  );
};

export default Donation;

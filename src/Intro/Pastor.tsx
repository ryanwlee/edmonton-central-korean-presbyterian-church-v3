import Styled from "styled-components";
import pastor_dh from "../images/pastor_dh.jpg";
import {
  Container,
  FlexRow,
  FlexColumn,
  Label,
  Content,
  device,
} from "../Style";

const PastorImg = Styled.img`
  width: 50%;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 15px;
  object-fit: cover;

  @media ${device.md} {
    display: none;
  }
`;

const SmallPastorImg = Styled.img`
  display: none;

  @media ${device.md} {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 15px;
    margin-top: 15px;
    object-fit: cover;
  }
`;

const Pastor = () => {
  return (
    <Container style={{}}>
      <div style={{ ...FlexRow, gap: "20px" }}>
        <PastorImg src={pastor_dh} alt={"pastor"} />
        <div style={{ ...FlexColumn, textAlign: "left" }}>
          <div style={{ ...Label }}>ECKPC</div>
          <div style={FlexRow}>
            <div style={{ ...Label, fontSize: "25px" }}>정동호</div>
            <div style={{ ...Label, fontSize: "20px", marginLeft: "10px" }}>
              담임 목사
            </div>
          </div>
          <SmallPastorImg src={pastor_dh} alt={"pastor"} />
          <div
            style={{
              ...FlexColumn,
              marginTop: "30px",
              ...Content,
              textAlign: "left",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              주의 평강과 사랑이 성도님들의 가정 위에 가득하시길 소망합니다.
              우리는 지난 몇 년 동안 팬데믹 아래서의 삶이 쉽지 않았습니다.
              모두가 어두운 터널을 걸어왔습니다. 연령 고하를 막론하고 힘든
              길이었습니다.
            </div>
            <div style={{ marginBottom: "20px" }}>
              그러나 돌이켜보면 어렵고 힘든 것만 있었던 것은 아닙니다. 유익함도
              있었습니다. 그 유익함은 하나님의 은혜를 더욱 깊이 경험하는 기회가
              된 것입니다. 그동안 내가 마음껏 호흡하고 하루하루 무사한 것 당연한
              것이라고 여겼습니다. 그러나 팬데믹 중에 호흡하고, 보호받고, 안전을
              누리는 것이 얼마나 큰 은혜인지 깨닫게 되었습니다. 평상시 당연한
              것이라고 여긴 것들이 당연한 것이 아니라 하나님의 돌보심이었습니다.
            </div>
            <div style={{ marginBottom: "30px" }}>
              또한 감사한 것은 혼란스러운 상황에서도 교회와 성도들을 보호해
              주셨습니다. 하나님이 지켜주지 않으시면 사람이 경영하는 것이
              허사라는 것을 절실히 느꼈습니다. 성도님들 역시 힘든 시간들
              가운데서도 하나님의 오묘한 손길을 경험하셨을 것입니다. 바라기는
              받은 은혜를 기억하고 더욱 주님을 사랑하며 살아가시길 소망합니다.
              모든 성도님들의가정에 하나님의 형통한 은혜가 넘치시길 바랍니다.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pastor;

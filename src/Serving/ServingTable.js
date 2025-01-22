import { useState } from "react";
import { Container, device } from "../Style";
import Styled from "styled-components";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import no1 from "../images/no1.png";
import no2 from "../images/no2.png";
import no3 from "../images/no3.png";
import no4 from "../images/no4.png";
import no5 from "../images/no5.png";
import no6 from "../images/no6.png";
import no7 from "../images/no7.png";
import no8 from "../images/no8.png";
import no9 from "../images/no9.png";
import no10 from "../images/no10.png";
import ServingInfoCollapse from "./ServingInfoCollapse";

const StyledTitle = Styled.div`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  font-family: establishRetrosansOTF;
  margin-bottom: 40px;
`;

const ServingInfoTable = Styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 15%;
  max-width: 1000px;

  @media ${device.lg} {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media ${device.md} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const ServingInfoRow = Styled.div`
  color: ${({ collapsed }) => (collapsed ? "#000000" : "#ffffff")};
  background-color: ${({ collapsed }) => (collapsed ? "#ffffff" : "#5DB683")};
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 9px;
  padding-bottom: 9px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ServingInfoName = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const ServingInfoButton = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CollapseBigRow = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CollapseSmallRow = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const CollapseTitle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  flex-direction: row;
  gap: 7px;
  word-break: break-word;
  text-align: left;
`;
const CollapseContent = Styled.div`
  padding-left: 27px;
  text-align: left;
`;

const NoLetter = Styled.img`
  width: 19px;
  height: auto;
`;

const servingData = [
  {
    id: 1,
    title: "예배 위원회",
    content: [
      {
        id: 1,
        title: "예배 준비",
        content: "정기집회(주일, 수요일, 새벽, 절기)",
        src: no1,
      },
      {
        id: 2,
        title: "예배 장소",
        content: "안내(예배부는 본당 안에서), 헌금위원 준비",
        src: no2,
      },
      { id: 3, title: "강단 장식", src: no3 },
      { id: 4, title: "음향, 영상제작 및 촬영", src: no4 },
      { id: 5, title: "찬양팀", src: no5 },
    ],
  },
  {
    id: 2,
    title: "선교 위원회",
    content: [
      {
        id: 1,
        title: "국외선교",
        content:
          "세네갈(보야교회), 카자흐스탄(발삐삑, 티켈리교회), 몽골: 이경환, 브라질: 강경찬, 일본: 오필재, 네팔: 서동아, 인도: 전하라",
        src: no1,
      },
      {
        id: 2,
        title: "국내선교(개척교회)",
        content:
          "밴쿠버 리디머교회(장기환목사), 배틀포드 교회(이기준목사), Love Corps(원주민)",
        src: no2,
      },
      {
        id: 3,
        title: "해외(미자립교회 지원)",
        content:
          "한국 현리교회(최상헌목사) 무안 구남교회(고한호목사), 박현아목사(외국인 노동자 사역, 한국)",
        src: no3,
      },
      {
        id: 4,
        title: "Mission Trip",
        content:
          "선교사 파송지역, 원주민, 카자흐스탄(9월), 세네갈(11월), 협력선교지에서 선교팀 요청시 협의 후 결정",
        src: no4,
      },
      { id: 5, title: "세네갈 학생 돕기", src: no5 },
    ],
  },
  {
    id: 3,
    title: "봉사 위원회",
    content: [
      {
        id: 1,
        title: "간식",
        content: "커피 및 음료 / 간식비 후원",
        src: no1,
      },
      {
        id: 2,
        title: "식사",
        content: "매달 1회",
        src: no2,
      },
      {
        id: 3,
        title: "특별절기 만찬",
        content: "부활절, 창립주일, 추수감사절, 성탄절 등",
        src: no3,
      },
      { id: 4, title: "정리봉사", src: no4 },
      { id: 5, title: "주방 관리 및 운영", src: no5 },
      {
        id: 6,
        title: "야유회",
        content: "장소 및 식사준비, 6월 말",
        src: no6,
      },
    ],
  },
  {
    id: 4,
    title: "새가족 위원회",
    content: [
      {
        id: 1,
        title: "새가족부",
        content: "교역자가 교육 * 정착지원, 새가족반, 환영회, 사진 촬영",
        src: no1,
      },
      {
        id: 2,
        title: "전도 및 심방 지원",
        src: no2,
      },
    ],
  },
  {
    id: 5,
    title: "양육 위원회",
    content: [
      {
        id: 1,
        title: "성경통독 및 각종 성경공부, 가정 성경공부",
        src: no1,
      },
      {
        id: 2,
        title: "제직 세미나(전•후반기)",
        src: no2,
      },
      { id: 3, title: "전교인 성경 퀴즈대회", src: no3 },
      { id: 4, title: "체육행사 활성화", src: no4 },
    ],
  },
  {
    id: 6,
    title: "관리 위원회",
    content: [
      {
        id: 1,
        title: "사무관리(사무용품 구입), 비품관리",
        src: no1,
      },
      {
        id: 2,
        title: "차량관리, 주차관리",
        src: no2,
      },
      {
        id: 3,
        title:
          "시설관리(교회 본건물, 교육관 내부-사용부서 뒷정리 / 외부시설-주차장, 조경)",
        src: no3,
      },
    ],
  },
  {
    id: 7,
    title: "교육 위원회",
    content: [
      {
        id: 1,
        title: "유아부",
        content: "미취학 아동 신앙지도 및 관리",
        src: no1,
      },
      {
        id: 2,
        title: "아동부",
        content: "Gr. 1∼6 학생들의 신앙지도 및 관리",
        src: no2,
      },
      {
        id: 3,
        title: "중・고등부",
        content: "Gr. 7∼12 학생들의 신앙지도 및 관리",
        src: no3,
      },
      {
        id: 4,
        title: "청년부",
        content: "청년・대학생의 신앙지도 및 관리",
        src: no4,
      },
      {
        id: 5,
        title: "매월 1회 행사진행을 논의",
        src: no5,
      },
      {
        id: 6,
        title: "한글학교",
        content: "K-Gr. 12 학생들의 한글 교육",
        src: no6,
      },
      {
        id: 7,
        title: "8월 졸업예배",
        src: no7,
      },
    ],
  },
  {
    id: 8,
    title: "재정 위원회",
    content: [
      {
        id: 1,
        title: "헌금 수입 및 지출 기록(재정 위원장, 재정부장, 안수집사·권사)",
        src: no1,
      },
      {
        id: 2,
        title: "재정 관리",
        src: no2,
      },
      { id: 3, title: "헌금봉투 구매", src: no3 },
    ],
  },
  {
    id: 9,
    title: "기획 위원회",
    content: [
      {
        id: 1,
        title: "기획",
        content: "전교인 부흥회 및 세미나, 체육대회, 선교사 파송",
        src: no1,
      },
      {
        id: 2,
        title: "인사관리",
        src: no2,
      },
      { id: 3, title: "구제, 장학기금 모금", src: no3 },
      { id: 4, title: "성례식 준비", content: "시무권사", src: no4 },
      { id: 5, title: "부동산 관리", content: "개보수, 증축", src: no5 },
      { id: 6, title: "홍보 편찬", content: "요람, 홈페이지 관리", src: no6 },
      { id: 7, title: "교회 내규수정", src: no7 },
      { id: 8, title: "요한선교회 나들이", src: no8 },
      { id: 9, title: "교육관 운영 수칙", src: no9 },
      { id: 10, title: "경조비", src: no10 },
    ],
  },
  {
    id: 10,
    title: "감사 위원회",
    content: [
      {
        id: 1,
        title: "재정감사",
        content: "재정: 최경보 장로, 신원호 집사, 김태양 집사",
        src: no1,
      },
    ],
  },
  {
    id: 11,
    title: "찬양대",
    content: [
      {
        id: 1,
        title: "찬양대(할렐루야)",
        content: "찬양대 연습: 주일 예배, 절기 예배 찬양대 훈련: 세미나",
        src: no1,
      },
      {
        id: 2,
        title: "연합 집회",
        content: "에드먼턴 연합모임(부활절, 성탄축하 등)",
        src: no2,
      },
      { id: 3, title: "전교인 찬양경연대회", src: no3 },
    ],
  },
];

const ServingTable = () => {
  const [expand, setExpand] = useState([]);

  const handleExpand = (id) => {
    setExpand([...expand, id]);
  };

  const handleCollapse = (id) => {
    setExpand(expand.filter((i) => i !== id));
  };

  return (
    <Container>
      <StyledTitle>제직회 각 위원회</StyledTitle>
      <ServingInfoTable>
        {servingData.map((r) => (
          <>
            <Divider />
            <ServingInfoRow collapsed={expand.includes(r.id) ? false : true}>
              <ServingInfoName>{r.title}</ServingInfoName>
              <ServingInfoButton>
                <AddIcon
                  style={{
                    color: "#5DB683",
                    weight: 200,
                    cursor: "pointer",
                    display: expand.includes(r.id) ? "none" : "block",
                  }}
                  onClick={() => handleExpand(r.id)}
                />
                <RemoveIcon
                  style={{
                    color: "#ffffff",
                    weight: 200,
                    cursor: "pointer",
                    display: expand.includes(r.id) ? "block" : "none",
                  }}
                  onClick={() => handleCollapse(r.id)}
                />
              </ServingInfoButton>
            </ServingInfoRow>
            <ServingInfoCollapse
              collapsed={expand.includes(r.id) ? false : true}
            >
              {r.content.map((item) => (
                <CollapseBigRow key={item.id}>
                  <CollapseSmallRow>
                    <CollapseTitle>
                      <NoLetter src={item.src} />
                      {item.title}
                    </CollapseTitle>
                  </CollapseSmallRow>
                  {item.content && (
                    <CollapseSmallRow>
                      <CollapseContent>{item.content}</CollapseContent>
                    </CollapseSmallRow>
                  )}
                </CollapseBigRow>
              ))}
            </ServingInfoCollapse>
          </>
        ))}
        <Divider />
      </ServingInfoTable>
    </Container>
  );
};

export default ServingTable;

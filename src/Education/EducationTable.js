import { useState } from "react";
import { Container, device } from "../Style";
import Styled from "styled-components";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EducationInfoCollapse from "./EducationInfoCollapse";

const StyledTitle = Styled.div`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  font-family: establishRetrosansOTF;
  margin-bottom: 40px;
`;

const EducationInfoTable = Styled.div`
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

const EducationInfoRow = Styled.div`
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
  cursor: pointer;
`;

const EducationInfoName = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const EducationInfoButton = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CollapseBigRow = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CollapseDescription = Styled.div`
  text-align: left;
  margin-bottom: 25px;
`;

const CollapseSmallRow = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const CollapseTitle = Styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  flex-direction: row;
  gap: 7px;
  word-break: break-word;
  text-align: left;
  width: 100px;
`;

const CollapseBold = Styled.div`
  font-weight: 600;
  text-align: left;
`;

const CollapseContent = Styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 27px;
  text-align: left;
  gap: 5px;
`;

const educationData = [
  {
    id: 1,
    title: "영유아 유치부",
    description:
      "영유아 유치부는 미취학 아이들과 함께 모이는 신앙 공동체입니다.",
    time: "매주 주일 오전 11시",
    location: "1층 영유아유치부실",
    leader: "유지영 목사, 박정림 차장",
    people: "남길주 김성민 김수민 전푸른솔 조이안 송병준 한서윤 최예빈 이미아",
  },
  {
    id: 2,
    title: "아동부",
    description:
      "아동부는 Grade 1부터 Grade 6까지의 어린이들이 함께 모이는 신앙 공동체입니다.",
    time: "매주 주일 오전 11시",
    location: "1층 아동부실",
    leader: "최요한 목사, 문정란 부장, 김보영 차장",
    people: "김사랑 남궁하민 신예빈 이재훈 이진희 전인숙 정민재 조일조 최진",
  },
  {
    id: 3,
    title: "중고등부",
    description:
      "중고등부는 Grade 7부터 Grade 12까지의 중고등학생들이 함께 모이는 신앙 공동체입니다.",
    time: "매주 주일 오전 11시",
    location: "교육관 1층 (체육관)",
    leader: "이수지 전도사, 윤숙자 부장, 김병철 차장",
    people:
      "강지석 김민철 김소영 김소희 김정호 남궁하준 송병찬 이우송 이현수 황영석",
    people2: "* 보조교사: 류강현 박준성 이유진 이효리",
  },
  {
    id: 4,
    title: "청년부",
    description: "청년들이 함께 모이는 신앙 공동체입니다.",
    time: "매주 토요일 오후 6시 30분",
    location: "본당",
    leader: "최요한 목사",
  },
  {
    id: 5,
    title: "한글 학교",
    description: "한글을 익히면서 예배 드리는 신앙 공동체 입니다.",
    time: "매주 주일 오전 10시",
    location: "교육관 2층 (세미나실)",
    leader: "박지희 부장",
    people: "김영남 김태준 김태희 변희원 홍성",
  },
];

const EducationTable = () => {
  const [expand, setExpand] = useState([]);

  const handleExpand = (id, isExpanded) => {
    if (isExpanded) {
      setExpand(expand.filter((i) => i !== id));
    } else {
      setExpand([...expand, id]);
    }
  };

  return (
    <Container>
      <StyledTitle>교육부</StyledTitle>
      <EducationInfoTable>
        {educationData.map((r) => (
          <>
            <Divider />
            <EducationInfoRow
              collapsed={expand.includes(r.id) ? false : true}
              onClick={() => handleExpand(r.id, expand.includes(r.id))}
            >
              <EducationInfoName>{r.title}</EducationInfoName>
              <EducationInfoButton>
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
                />
              </EducationInfoButton>
            </EducationInfoRow>
            <EducationInfoCollapse
              collapsed={expand.includes(r.id) ? false : true}
            >
              <CollapseBigRow>
                <CollapseDescription>{r.description}</CollapseDescription>
                {r.time && (
                  <CollapseSmallRow>
                    <CollapseTitle>예배 시간</CollapseTitle>
                    <CollapseContent>{r.time}</CollapseContent>
                  </CollapseSmallRow>
                )}
                {r.location && (
                  <CollapseSmallRow>
                    <CollapseTitle>예배 장소</CollapseTitle>
                    <CollapseContent>{r.location}</CollapseContent>
                  </CollapseSmallRow>
                )}
                {r.leader && (
                  <CollapseSmallRow>
                    <CollapseTitle>섬기는 분들</CollapseTitle>
                    <CollapseContent>
                      <CollapseBold>담당자</CollapseBold>
                      {r.leader}
                    </CollapseContent>
                  </CollapseSmallRow>
                )}
                {r.people && (
                  <CollapseSmallRow>
                    <CollapseTitle></CollapseTitle>
                    <CollapseContent>{r.people}</CollapseContent>
                  </CollapseSmallRow>
                )}
                {r.people2 && (
                  <CollapseSmallRow>
                    <CollapseTitle></CollapseTitle>
                    <CollapseContent>{r.people2}</CollapseContent>
                  </CollapseSmallRow>
                )}
              </CollapseBigRow>
            </EducationInfoCollapse>
          </>
        ))}
        <Divider />
      </EducationInfoTable>
    </Container>
  );
};

export default EducationTable;

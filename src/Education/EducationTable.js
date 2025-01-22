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
  width: 90px;
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
    leader: "유지영 목사, 최영옥 부장",
    people: "이은주 박정림 남길주 김성민 전푸른솔 조이안 송병준",
  },
  {
    id: 2,
    title: "아동부",
    description:
      "아동부는 Grade 1부터 Grade 6까지의 어린이들이 함께 모이는 신앙 공동체입니다.",
    time: "매주 주일 오전 11시",
    location: "1층 아동부실",
    leader: "윤병섭 목사, 이영희 부장",
    people: "문정란 안혜정 남궁하민 조일조 유주평 신예빈 이캐빈 박다영",
  },
  {
    id: 3,
    title: "중고등부",
    description:
      "중고등부는 Grade 7부터 Grade 12까지의 중고등학생들이 함께 모이는 신앙 공동체입니다.",
    time: "매주 주일 오전 11시",
    location: "1층 교육관 (체육관)",
    leader: "이수지 전도사, 한효숙 부장",
    people:
      "윤한성 남궁하준 이은희 김소영 김정호 황영석 김소희 김민철 최다은 정안젤라",
    people2: "* 보조교사: 송병찬 이우송",
  },
  {
    id: 4,
    title: "청년부",
    description: "청년들이 함께 모이는 신앙 공동체입니다.",
    time: "매주 토요일 오후 6시 30분",
    location: "1층 아동부실",
    leader: "윤병섭 목사, 이영희 부장",
  },
  {
    id: 5,
    title: "한글 학교",
    description: "한글을 익히면서 예배 드리는 신앙 공동체 입니다.",
    time: "매주 주일 오전 10시",
    location: "2층 교육관 (세미나실)",
    leader: "강주연 부장",
    people: "홍 성 임성식 이순례",
    people2: "* 보조교사: 김태준 선세린 선세은 임도언 최 율",
  },
];

const EducationTable = () => {
  const [expand, setExpand] = useState([]);

  const handleExpand = (id) => {
    setExpand([...expand, id]);
  };

  const handleCollapse = (id) => {
    setExpand(expand.filter((i) => i !== id));
  };

  return (
    <Container>
      <StyledTitle>교육부</StyledTitle>
      <EducationInfoTable>
        {educationData.map((r) => (
          <>
            <Divider />
            <EducationInfoRow collapsed={expand.includes(r.id) ? false : true}>
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
                  onClick={() => handleCollapse(r.id)}
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
                    <CollapseTitle>섬기는 사람들</CollapseTitle>
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

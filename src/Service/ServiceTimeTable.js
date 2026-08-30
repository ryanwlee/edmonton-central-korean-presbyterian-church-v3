import Styled, { css } from "styled-components";
import { device } from "../Style";

const ROWS = [
  {
    name: "주일 예배",
    badge: "주일",
    variant: "sunday",
    slots: [
      { time: "오전 9시", location: "본당" },
      { time: "오전 11시", location: "본당 (온라인)" },
    ],
  },
  {
    name: "수요 예배",
    badge: "수",
    variant: "wednesday",
    slots: [{ time: "오후 7시 30분", location: "본당" }],
  },
  {
    name: "새벽기도",
    badge: "화-토",
    variant: "weekday",
    slots: [{ time: "오전 6시", location: "본당" }],
  },
  {
    name: "영 · 유아 · 유치부",
    badge: "주일",
    variant: "sunday",
    slots: [{ time: "오전 11시", location: "영유아, 유치부실" }],
  },
  {
    name: "아동부",
    badge: "주일",
    variant: "sunday",
    slots: [{ time: "오전 11시", location: "아동부실" }],
  },
  {
    name: "중 · 고등부",
    badge: "주일",
    variant: "sunday",
    slots: [{ time: "오전 11시", location: "교육관" }],
  },
  {
    name: "청년부 예배",
    badge: "주일",
    variant: "sunday",
    slots: [{ time: "오후 1시 30분", location: "본당" }],
  },
  {
    name: "다락방 모임",
    badge: "monthly",
    variant: "monthly",
    slots: [{ time: "다락방 별 상이", location: "다락방 별 상이" }],
  },
];

const badgeColor = {
  sunday: "#ff4646",
  wednesday: "#198507",
  saturday: "#7c28d7",
  monthly: "#9e9e9e",
  weekday: "#7c28d7",
};

const Table = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Row = Styled.div`
  display: grid;
  grid-template-columns: 10em 58px 9em 9.5em;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  background: #ffffff;
  border-radius: 999px;
  min-height: ${(p) => (p.$tall ? "64px" : "42px")};
  padding: ${(p) => (p.$tall ? "6px 14px" : "2px 14px")};

  @media ${device.sm} {
    grid-template-columns: minmax(0, 1fr) 58px;
    grid-template-areas:
      "name badge"
      "slots slots";
    justify-content: stretch;
    border-radius: 20px;
    row-gap: 4px;
    padding: 8px 12px;
  }
`;

const Name = Styled.div`
  padding-left: 4px;
  color: #5db683;
  font-family: "KoPubWorld Dotum Bold", sans-serif;
  font-size: 15px;
  line-height: 1.3;
  text-align: left;
  word-break: keep-all;

  @media ${device.sm} {
    grid-area: name;
    padding-left: 0;
  }
`;

const Badge = Styled.span`
  width: 58px;
  height: 30px;
  border-radius: 15px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  font-family: "KoPubWorld Dotum Bold", sans-serif;
  font-size: ${(p) => (p.$variant === "monthly" ? "10px" : "12px")};
  line-height: 1.15;
  color: ${(p) => badgeColor[p.$variant]};
  background: #ffffff;
  border: 2px solid ${(p) =>
    p.$variant === "weekday" ? "transparent" : badgeColor[p.$variant]};
  box-sizing: border-box;

  ${(p) =>
    p.$variant === "weekday" &&
    css`
      background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(180deg, #fcb106 0%, #9341b0 50%, #6712fa 100%)
          border-box;
    `}

  @media ${device.sm} {
    grid-area: badge;
  width: 58px;
    height: 30px;
  }
`;

const Stack = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(p) => (p.$tall ? "4px" : "0")};
  color: #353535;
  font-family: "KoPubWorld Dotum Medium", sans-serif;
  font-size: 15px;
  line-height: 17px;
  text-align: left;

  @media ${device.sm} {
    display: none;
  }
`;

const MobileSlots = Styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    grid-area: slots;
    gap: 4px;
    width: 100%;
  }
`;

const MobileSlot = Styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: #353535;
  font-family: "KoPubWorld Dotum Medium", sans-serif;
  font-size: 15px;
  line-height: 17px;
  text-align: left;
`;

function ServiceTimeTable() {
  return (
    <Table role="table" aria-label="예배 시간 안내">
      {ROWS.map((row) => {
        const tall = row.slots.length > 1;
        return (
          <Row key={row.name} role="row" $tall={tall}>
            <Name role="cell">{row.name}</Name>
            <Badge $variant={row.variant} role="cell">
              {row.variant === "monthly" ? (
                <>
                  <span>매월</span>
                  <span>1회</span>
                </>
              ) : (
                row.badge
              )}
            </Badge>
            <Stack $tall={tall} role="cell">
              {row.slots.map((slot) => (
                <span key={slot.time}>{slot.time}</span>
              ))}
            </Stack>
            <Stack $tall={tall} role="cell">
              {row.slots.map((slot) => (
                <span key={`${slot.time}-${slot.location}`}>{slot.location}</span>
              ))}
            </Stack>
            <MobileSlots>
              {row.slots.map((slot) => (
                <MobileSlot key={`m-${slot.time}-${slot.location}`}>
                  <span>{slot.time}</span>
                  <span>{slot.location}</span>
                </MobileSlot>
              ))}
            </MobileSlots>
          </Row>
        );
      })}
    </Table>
  );
}

export default ServiceTimeTable;

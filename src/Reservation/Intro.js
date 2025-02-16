import { useState, useEffect } from "react";
import Styled from "styled-components";
import { device } from "../Style";

const ReservationContainer = Styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: white;
`;

const ButtonContainer = Styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 30px;

  @media ${device.md} {
    gap: 10px;
  }
`;

const RoomButton = Styled.button`
  background-color: ${({ isSelected }) => isSelected ? '#4a9268' : '#5DB683'};
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: KoPubWorld Dotum Bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #4a9268;
  }

  @media ${device.md} {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

const Title = Styled.h1`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  font-family: establishRetrosansOTF;
  margin-bottom: 30px;
  text-align: center;
`;

const CalendarContainer = Styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 600px;
  position: relative;
`;

const CalendarFrame = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => isActive ? '1' : '0'};
  visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease;
  padding: 0 20px;
`;

function Intro() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const temp_url = "https://calendar.app.google/MGSFBAakcnJo9fkK7";
  const temp_embed =
    <iframe
      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1L5i_CkLcFLzOHixQVqky08bTT3VIywfskUtfPb7a27FEmeuw81b_X3zg2SRdP2oMXQkM4xLTO?gv=true"
      style={{ border: 0, width: '100%', height: '100%' }}
      frameBorder="0"
      loading="eager"
    />;

  const rooms = [
    { name: "본당", embed: temp_embed, url: temp_url },
    { name: "유치부실", embed: temp_embed, url: temp_url},
    { name: "소예배실", embed: temp_embed, url: temp_url },
    { name: "교육관 1층", embed: temp_embed, url: temp_url},
    { name: "교육관 2층 1", embed: temp_embed, url: temp_url},
    { name: "교육관 2층 2", embed: temp_embed, url: temp_url},
    { name: "주방", embed: temp_embed, url: temp_url},
  ];

  const handleRoomHover = (roomName) => {
    setSelectedRoom(roomName);
  };

  const handleRoomClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ReservationContainer>
      <Title>시설 예약</Title>
      <ButtonContainer>
        {rooms.map((room) => (
          <RoomButton
            key={room.name}
            isSelected={selectedRoom === room.name}
            onMouseEnter={() => handleRoomHover(room.name)}
            onClick={() => handleRoomClick(room.url)}
          >
            {room.name}
          </RoomButton>
        ))}
      </ButtonContainer>
      <CalendarContainer>
        {rooms.map((room) => (
          <CalendarFrame
            key={room.name}
            isActive={selectedRoom === room.name}
          >
            {room.embed}
          </CalendarFrame>
        ))}
      </CalendarContainer>
    </ReservationContainer>
  );
}

export default Intro;
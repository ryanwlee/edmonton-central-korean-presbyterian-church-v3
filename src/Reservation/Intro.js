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
  background-color: ${({ isSelected, isOverview }) => isOverview ?
    (isSelected ? '#3c5f9c' : '#4b77c3') :
    (isSelected ? '#4a9268' : '#5DB683')
  };
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
    background-color: ${({ isOverview }) => 
      isOverview ? '#3c5f9c' : '#4a9268'
    };
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
  height: 1370px;
  position: relative;
`;

const CalendarFrame = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1370px;
  opacity: ${({ isActive }) => isActive ? '1' : '0'};
  visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease;
  padding: 0 20px;
`;

function generateEmbedUrl(i) {
  return `https://calendar.google.com/calendar/embed?src=edmontonccreservation${i}%40gmail.com&ctz=America%2FEdmonton`;
}

function Intro() {
  const [selectedRoom, setSelectedRoom] = useState("전체");

  const temp_url = "https://calendar.app.google/MGSFBAakcnJo9fkK7";
  const embedding_parameters = "&mode=WEEK&showCalendars=0&showTitle=0";
  /*
  Google Calendar embed supports these view modes:
  AGENDA - Schedule view
  WEEK - Week view
  MONTH - Month view (default)
  You can also set other parameters like:
  &showPrint=0 - Hide the print button
  &showTabs=0 - Hide the tabs
  &showCalendars=0 - Hide the calendars list
  &showTitle=0 - Hide the title
  &showNav=0 - Hide the navigation buttons
  */

  const rooms = [
    {
      name: "전체",
      embed: generateEmbedUrl('') + "&mode=AGENDA",
      url: 0
    },
    {
      name: "본당",
      embed: generateEmbedUrl(1) + embedding_parameters, 
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Qn2F35KmeWBcEYAJI6CamdCmciolRH6X0ySyJDlMMYXYBZO2hsEk-JJrhxmbTETOnIj-ovMen?gv=true"
    },
    {
      name: "유치부실",
      embed: generateEmbedUrl(2) + embedding_parameters, 
      url: temp_url
    },
    {
      name: "소예배실",
      embed: generateEmbedUrl(3) + embedding_parameters, 
      url: temp_url
    },
    {
      name: "교육관 1층",
      embed: generateEmbedUrl(4) + embedding_parameters,  
      url: temp_url
    },
    {
      name: "교육관 2층 1",
      embed: generateEmbedUrl(5) + embedding_parameters, 
      url: temp_url
    },
    {
      name: "교육관 2층 2",
      embed: generateEmbedUrl(6) + embedding_parameters, 
      url: temp_url
    },
    {
      name: "주방",
      embed: generateEmbedUrl(7) + embedding_parameters,  
      url: temp_url
    },
  ];

  const handleRoomHover = (roomName) => {
    setSelectedRoom(roomName);
  };

  const handleRoomClick = (url, roomName) => {
    if (roomName === "전체") return; // Do nothing for "전체" button
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
            isOverview={room.name === "전체"}
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
            <iframe src={room.embed} style={{ border: 0, width: '100%', height: '1370px' }} frameborder="0" scrolling="no" loading="eager"></iframe>
          </CalendarFrame>
        ))}
      </CalendarContainer>
    </ReservationContainer>
  );
}

export default Intro;
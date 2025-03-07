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
  background-color: #5DB683;
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

const Title = Styled.a`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  font-family: establishRetrosansOTF;
  margin-bottom: 30px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TitleContainer = Styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const CalendarContainer = Styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 600px;
  position: relative;
`;

function Intro() {

  const rooms = [
    {
      name: "본당",
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Z2Sg7mgdohD6LF1ibQO04fbgyClm4SU4a5dGhwjUsrgzWSEe_GJ26t2uVzaLRiHdTCJSoLHR-?gv=true"
    },
    {
      name: "유치부실",
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3U4e6rANxgkaGerWxICmqJS7Ptt4mVLUtPI3NlYx--nflDMSEMNmmnlyNLsthMvx5vPm4i_N5N?gv=true"
    },
    {
      name: "소예배실 (아동부실)",
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Qchvgs943ZXXewOB182cr4Otfy3OTycNiOjuY5DAAXsyu1Pb4sHpvAE5tOOKUPHzwWku2HTv-?gv=true"
    },
    {
      name: "교육관 1층 (체육관)",
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2OJnTe5d7ZMeJS2UgHMSnre5qMm3GZ27NQF_cK4M1Q8sI6lj5eiwmIKvlkCUjI2J1dST5oA9vy?gv=true"
    },
    {
      name: "교육관 2층 1 (찬양대실)",
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rikBcRFd2o0QcquXiha8x_ENBGqDo7h0bb56KLbcWhREek57zf_z3M4U71O9Y9VTYs1-SWjP7?gv=true"
    },
    {
      name: "교육관 2층 2 (세미나룸)",
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2a1SAw5AE8hwZ5_GKvs3n7Ysg3i1uK39pMqGKmKwSAWuclGqtpMdTi_weWE-fhMLTIQUnwAloo?gv=true"
    },
    {
      name: "주방",
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Wt2J4tf1nTLdmm0Ky1k4DWU3a_4zc49Kiq-3UTBV_oW4kZuPblmkcF6pLAJqPDDRfeT9z9PcF?gv=true"
    },
  ];

  return (
    <ReservationContainer>
      <TitleContainer>
        <Title href="https://calendar.google.com/calendar/appointments/AcZssZ0Am6kRBMFuS41caRLP9ig8aTbL_-Mw8IKNyA4=?gv=true" target="_blank">
          시설 예약
        </Title>
      </TitleContainer>
      <ButtonContainer>
        {rooms.map((room) => (
          <RoomButton
            key={room.name}
            onClick={() => window.open(room.url, '_blank')}
          >
            {room.name}
          </RoomButton>
        ))}
      </ButtonContainer>
      <CalendarContainer>
        <iframe
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
          src="https://calendar.google.com/calendar/embed?src=edmontonccreservation%40gmail.com&ctz=America%2FEdmonton&mode=WEEK&mode=WEEK&showCalendars=0&showTitle=0"
          style={{ border: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          scrolling="no"
        />
      </CalendarContainer>
    </ReservationContainer>
  );
}

export default Intro;
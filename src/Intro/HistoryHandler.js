import React, { useState, useEffect, useRef } from "react";
import Styled from "styled-components";
import { Container, FlexRow, FlexColumn, ContentBoldGreen } from "../Style";
import ArrowDown from "../images/ArrowDown.png";
import Timeline from "../images/Timeline.png";
import Ellipse from "../images/Ellipse.png";

import { timeTableHandler } from "./Handler";

const TimelineContainer = Styled.div` 
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  height: ${({ height }) => height}px;
`;

const StyledTimeline = Styled.img`
  width: 100%;
  margin-bottom: 10px;
  z-index: 10;
`;

const GreenRound = Styled.img`
  position: absolute;
  left: ${({ percent }) => `calc(${percent}% - 8px)`}; /* Adjust based on half the width of GreenRound */
  top: ${({ containerHeight }) => `calc(50% - 8px)`}; /* Adjust based on half the height of GreenRound */
  z-index: 20;
  cursor: pointer;
`;

const DynamicYear = Styled.div`
  position: absolute;
  height: 30px;
  top: ${({ containerHeight }) => `calc(50% - 15px)`}; /* Adjust based on half the height */
  left: ${({ percent }) => `calc(${percent}% - 40px)`}; /* Adjust based on half the width */
  background-color: #5DB683;
  border-radius: 20px;
  border-color: #5DB683;
  z-index: 20;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adjust width based on screen size */
  @media (max-width: 600px) {
    width: 40px;
    left: ${({ percent }) => `calc(${percent}% - 20px)`}; /* Adjust based on half the width */
  }

  @media (min-width: 601px) and (max-width: 1200px) {
    width: 60px;
    left: ${({ percent }) => `calc(${percent}% - 30px)`}; /* Adjust based on half the width */
  }

  @media (min-width: 1201px) {
    width: 80px;
    left: ${({ percent }) => `calc(${percent}% - 40px)`}; /* Adjust based on half the width */
  }
`;

const HistoryHandler = (props) => {
  const { data, initialYear, shortInitialYear, initialShow } = props;
  const [year, setYear] = useState(data?.initialYear || initialYear);
  const [yearTime, setYearTime] = useState(
    data?.initialPercent || shortInitialYear
  );
  const [show, setShow] = useState(initialShow);
  const [containerHeight, setContainerHeight] = useState(40); // Default height
  const timelineRef = useRef(null);

  const updateHeight = () => {
    if (timelineRef.current) {
      setContainerHeight(timelineRef.current.clientHeight);
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [show, year, yearTime]);

  const timelineHandler = (year, detailYear) => {
    if (year === data?.year) {
      setYear(`${detailYear}`);
      setYearTime(`${(detailYear - data.year) * 10}`);
    }
  };

  return (
    <>
      <div style={FlexColumn}>
        <div style={{ ...FlexRow, marginBottom: "20px" }}>
          <img
            src={ArrowDown}
            style={{
              width: "10px",
              height: "8px",
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: "5px",
              cursor: "pointer",
              transform: `rotate(${show ? "0deg" : "180deg"})`,
              transition: ".2s ease-in-out",
            }}
            onClick={() => setShow(!show)}
          />
          <div
            style={{ ...ContentBoldGreen, cursor: "pointer" }}
            onClick={() => setShow(!show)}
          >
            {data.year} 년대
          </div>
        </div>
        {show && (
          <TimelineContainer height={containerHeight}>
            <StyledTimeline
              ref={timelineRef}
              src={Timeline}
              alt="Timeline"
              onLoad={updateHeight} // Update height when image loads
            />
            {data.timeLineArr.map((t, index) => {
              console.log("*******", data, data.timeLine);
              return (
                <GreenRound
                  key={index}
                  src={Ellipse}
                  percent={data.timeLine[t].percent}
                  containerHeight={containerHeight}
                  alt="Ellipse"
                  onClick={() =>
                    timelineHandler(data.year, data.timeLine[t].year)
                  }
                />
              );
            })}
            <DynamicYear percent={yearTime} containerHeight={containerHeight}>
              {year}
            </DynamicYear>
          </TimelineContainer>
        )}
        {show && timeTableHandler(data?.timeLine[year]?.history || [])}
      </div>
    </>
  );
};

export default HistoryHandler;

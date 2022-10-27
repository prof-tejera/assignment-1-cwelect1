import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.section`
  height: 35vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .5); 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, .5); 
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerTitle = styled.div``;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    timers.map((timer) => (
    <Timers key={`timer-${timer.title}`}>
        <h2 key="title">{timer.title}</h2>
        <Timer key={`timer-${timer.title}`}>
          {timer.C}
        </Timer>
    </Timers>
    ))
  );
};

export default TimersView;

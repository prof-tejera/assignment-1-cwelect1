import React from "react";
import styled from "styled-components";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.section`
  width: 50%;
  height: 20rem;
  display: grid;
  padding: 20px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  align-items: center;
`;

const Timer = styled.div`
  background-color: rgba(50, 150, 150, .5);
  border: 1px solid gray;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem;
`;

const Title = styled.div`
  margin: .25rem;
  font-size: 1.5rem;
`;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <div>
          <Timer key={`timer-${timer.title}`}>
            <Title>{timer.title}</Title>
          {timer.C}
          </Timer>
        </div>))
      }
    </Timers>
    )
  /*return (
    timers.map((timer) => (
    <Timers key={`timer-${timer.title}`}>
        <h2 key="title">{timer.title}</h2>
        <Timer key={`timer-${timer.title}`}>
          {timer.C}
        </Timer>
    </Timers>
    ))
  );*/
};

export default TimersView;

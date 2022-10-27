// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState, useEffect } from "react";
import Panel from "../generic/Panel";
import Buttons from "../generic/Buttons";
import properties from "../../properties.json";
import DisplayTime from "../generic/DisplayTime";

const Countdown = () => {
  const startTime = properties.timers[1].start;
  const endTime = properties.timers[1].end;
  const [isStarted, setisStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    let interval = null;
    if (isStarted && isPaused === false && time !== endTime) {
      interval = setInterval(() => {
        setTime((time) => time - 10 );
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused, time]);

  const handleStart = () => {
    setTime(startTime);
    setisStarted(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
      
  const handleFastForward = () => {
    setTime(endTime);
    setisStarted(false);
  };
  
  const handleReset = () => {
    setisStarted(false);
    setTime(startTime);
  };
    //<Panel endTime={endTime} time={time}></Panel>
  return (
    <div className="countdown">
      <DisplayTime endTime={endTime} time={time}></DisplayTime>
      <Buttons
        countDirection='down'
        time={time}
        endTime={endTime}
        isStarted={isStarted}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleFastForward={handleFastForward}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Countdown;
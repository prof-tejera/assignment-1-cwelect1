// A timer that counts up to X amount of time (e.g. count up to 2 minutes and 30 seconds, starting at 0)
import { useState, useEffect } from "react";
import Panel from "../generic/Panel";
import Button from "../generic/Buttons";
import properties from "../../properties.json";
import DisplayTime from "../generic/DisplayTime";

const Stopwatch = () => {
  const [isStarted, setisStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const endTime = properties.timers[0].end;
  
  useEffect(() => {
    let interval = null;
  
    if (isStarted && isPaused === false && time !== endTime) {
      interval = setInterval(() => {
        setTime((time) => time + 10 );
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused, time]);

  const handleStart = () => {
    setTime(0);
    setisStarted(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
      
  const handleFastForward = () => {
    setIsPaused(true);
    setTime(endTime);
  };
  
  const handleReset = () => {
    setisStarted(false);
    setTime(0);
  };
  //<Panel time={time}></Panel>
  return (
    <div className="stop-watch">
      <DisplayTime time={time}></DisplayTime>
      <Button
        countDirection='up'
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

export default Stopwatch;
// A timer that counts up to X amount of time (e.g. count up to 2 minutes and 30 seconds, starting at 0)
import { useState, useEffect } from "react";
import Panel from "../generic/Panel";
import Buttons from "../generic/Buttons";

const Countdown = () => {
  const startTime = 5000;
  const [isStarted, setisStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(startTime);
  const endTime = 0;

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
    
  return (
    <div className="stop-watch">
      <Panel endTime={endTime} time={time}></Panel>
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
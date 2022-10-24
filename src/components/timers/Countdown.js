// A timer that counts up to X amount of time (e.g. count up to 2 minutes and 30 seconds, starting at 0)
import { useState, useEffect } from "react";
import Panel from "../generic/Panel";
import Button from "../generic/Button";

const Countdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(60000);
  const maxTime = 600000; // 10 minutes

  useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time - 10 );
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setTime(0);
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    console.log("isPaused: " + isPaused)
  };
      
  const handleFastForward = () => {
    setIsPaused(true);
    setTime(maxTime);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    //setIsFF(false);
  };
    
  return (
    <div className="stop-watch">
      <Panel time={time}></Panel>
      <Button
        time={time}
        maxTime={maxTime}
        isActive={isActive}
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
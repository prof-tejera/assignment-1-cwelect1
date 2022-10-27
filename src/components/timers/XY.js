// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import properties from "../../properties.json";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";

const XY = () => {
  const startTime = properties.timers[2].start;
  const endTime = properties.timers[2].end;
  let totalRounds = properties.timers[2].rounds;
  const [isStarted, setisStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(startTime);
  const [currentRound, setCurrentRound] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isStarted && isPaused === false && time !== endTime) { // Timer is active
        interval = setInterval(() => {
          setTime((time) => time - 10 );
      }, 10);
    } else if (time === endTime && (currentRound < totalRounds)) { // Rounds are still active
      setCurrentRound(currentRound + 1);
      setTime(startTime);
    } else {  // Timer and Rounds have completed
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused, time, currentRound]);

  const handleStart = () => {
    if (currentRound === totalRounds) {setCurrentRound(0)} // Reset rounds if previously run
    else if (currentRound === 0) {setCurrentRound(1)} // Start 1st round
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
    setCurrentRound(0);
    setTime(startTime);
  };
    //<Panel displayType='xy' time={time} currentRound={currentRound} ></Panel>
  return (
    <div className="xy">
      <DisplayRounds displayType='xy' currentRound={currentRound}/>
      <DisplayTime time={time}/>
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

export default XY;
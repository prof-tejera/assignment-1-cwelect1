// A timer that counts from a specified time (in milliseconds) to 0 (e.g. count down from 2 minutes and 30 seconds to 0)
import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import properties from "../../properties.json";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";

const Tabata = () => {
  const workTime = properties.timers[3].work;
  const restTime = properties.timers[3].rest;
  const endTime = properties.timers[3].end;
  let totalRounds = properties.timers[3].rounds;
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(workTime);
  const [currentRound, setCurrentRound] = useState(0);
  const [isResting, setIsResting] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isStarted && isPaused === false && time !== endTime) { // Timer is active
      //console.log('Timer is active');
        interval = setInterval(() => {
          setTime((time) => time - 10 );
      }, 10);
    } else if (time === endTime && (currentRound < totalRounds) && isResting === false) { // Rounds are active Working ended switch to resting period
      //console.log('Rounds are active and in resting period');
      setIsResting(true);
      setTime(restTime);
    } else if (time === endTime && (currentRound < totalRounds)) { // Rounds are active: Resting ended switch to working period
      //console.log('Rounds are active and in working period');
      setIsResting(false);
      setCurrentRound(currentRound + 1);
      setTime(workTime);
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
    setTime(workTime);
    setIsStarted(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
      
  const handleFastForward = () => {
    //isResting ? setIsResting(false) : setIsResting(true);
    setTime(endTime);
    setIsStarted(false);
  };
  
  const handleReset = () => {
    setIsStarted(false);
    setCurrentRound(0);
    setTime(workTime);
  };
  //<Panel displayType='tabata' isResting={isResting} time={time} currentRound={currentRound} ></Panel>
    
  return (
    <div className="tabata">
      <DisplayRounds displayType='tabata' isResting={isResting} currentRound={currentRound}/>
      <DisplayTime time={time}/>
      <Buttons
        countDirection='down'
        time={time}
        endTime={endTime}
        includeMilliseconds={false}
        isStarted={isStarted}
        isPaused={isPaused}
        isResting={isResting}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleFastForward={handleFastForward}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Tabata;
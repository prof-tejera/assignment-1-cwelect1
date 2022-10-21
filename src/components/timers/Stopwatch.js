import { useState, useEffect } from "react";
import Panel from "../generic/Panel";
import Button from "../generic/Button";
//import Display from "../generic/Display";

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [btnText, setBtnText] = useState("Start");

  useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleClick = () => {
    if (isRunning === false) {
      setIsRunning(true);
      setBtnText("Stop");
      setIsActive(true);
      setIsPaused(false);
    } else {
      setIsRunning(false);
      setBtnText("Start");
      setIsPaused(true);
    }  };

  return (
    <div className="stop-watch">
      <Button 
        text={btnText}
        onClick={() => handleClick()}
      />
      <Panel time={time}/>
    </div>
  );
  /*
    return (
    <Panel>
      <Button 
        text={btnText}
        onClick={() => handleClick()}
      />
      <Panel>{time}</Panel>
    </Panel>
  );
  */
};

const start = () => {
  
}

export default Stopwatch;
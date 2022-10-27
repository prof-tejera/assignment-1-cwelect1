import React from "react";
import styled from "styled-components";

/*TODO (not all are in this component):
    1. Style whole dam app to be desireable and functional
    2. Update Document Component to wrap text (maybe set max width of th?)
*/

const StartButton = styled.button`
  background-color: rgba(241, 0, 0, .5);
`;

const ResetButton = styled.button`
  background-color: rgba(241, 0, 0, .5);
`;

const PauseButton = styled.button`
  background-color: rgba(241, 0, 0, .5);
`;

const FFButton = styled.button`
  background-color: rgba(241, 0, 0, .5);
`;

const WrappedButton = styled.button`
  background-color: rgba(255, 122, 89, .5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;
const setActiveButtons = (props, buttons) => {
  
  const startButton = <StartButton key="start-button" onClick={props.handleStart}>Start</StartButton>;
  const pauseButton = <PauseButton key="pause-button" onClick={props.handlePauseResume}>Pause</PauseButton>;
  const resumeButton = <PauseButton key="resume-button" onClick={props.handlePauseResume}>Resume</PauseButton>;
  const ffButton = <FFButton key="ff-button" onClick={props.handleFastForward}>Fast Forward</FFButton>;
  const resetButton = <ResetButton key="reset-button" onClick={props.handleReset}>Reset</ResetButton>;

  let htmlToReturn = [];

  if (buttons.includes("start")){
    htmlToReturn.push(startButton)
  } else {
    htmlToReturn.push(React.cloneElement(
      startButton, 
      { disabled: true })
    );
  }
  if (buttons.includes("pause") && buttons.includes("start")){
    htmlToReturn.push(React.cloneElement(
      pauseButton, 
      { disabled: true })
    );
  } else if (buttons.includes("pause")){
    htmlToReturn.push(pauseButton);
  } else {
    if (buttons.includes("resume")) {
      htmlToReturn.push(resumeButton);
    }
  }
  if (buttons.includes("ff")){
    htmlToReturn.push(ffButton);
  } else {
    htmlToReturn.push(React.cloneElement(
      ffButton, 
      { disabled: true })
    );
  }
  if (buttons.includes("reset")){
    htmlToReturn.push(resetButton);
  } else {
    htmlToReturn.push(React.cloneElement(
      resetButton, 
      { disabled: true })
    );
  }
  return[
    <div key="buttons">
      {htmlToReturn}
    </div>
  ]
}

/*const Button = (props) => {
  if(props.countDirection === 'up'){ // STOPWATCH
    if (!props.isStarted && ((props.time === 0) && props.countDirection === 'up') || !props.isStarted && ((props.time > 0) && props.countDirection === 'down')) {
      return(setActiveButtons(props, ['start', 'pause' , 'ff']))
    }
    else if (props.time === props.endTime) { // Max Time reached or FF clicked.
      return(setActiveButtons(props, ['start', 'reset']))
    }
    else if ((props.isStarted && !props.isPaused && props.time > 0) || (props.isPaused && props.time > 0)) {
      return(setActiveButtons(props, [props.isPaused ? "resume" : "pause", 'ff', 'reset']))
    }
  }
};*/

const Buttons = (props) => {
  if(props.countDirection === 'up'){ // STOPWATCH
    if (!props.isStarted && props.time === 0) {
      return(setActiveButtons(props, ['start', 'pause' , 'ff']))
    }
    else if (props.time === props.endTime) { // Max Time reached or FF clicked.
      return(setActiveButtons(props, ['reset']))
    }
    else if ((props.isStarted && !props.isPaused && props.time > 0) || (props.isPaused && props.time > 0)) {
      return(setActiveButtons(props, [props.isPaused ? "resume" : "pause", 'ff', 'reset']))
    }
  }
  else { // Countdown, XY, and Tabata
    //console.log("isStarted: " + props.isStarted + " isPaused: " + props.isPaused + " endTime: " + props.endTime);
    if (!props.isStarted && props.time > 0) {
      return(setActiveButtons(props, ['start', 'pause' , 'ff']))
    }
    else if (props.time === props.endTime) { // End Time reached or FF clicked.
      return(setActiveButtons(props, ['reset']))
    }
    else if ((props.isStarted && !props.isPaused && props.time > props.endTime) || (props.isPaused && props.time > props.endTime)) {
      return(setActiveButtons(props, [props.isPaused ? "resume" : "pause", 'ff', 'reset']))
    }
    else {return 'epic fail'}
  }
};

export default Buttons;
  /* 
    Stopwatch Layout
    -------------------------------------------------
    |                 00:00:00                      |
    |   -----     ------------      --      -----   |
    |  |Start|   |Pause/Resume|    |FF|    |Reset|  |
    |   -----     ------------      --      -----   |
    -------------------------------------------------

    Countdown Layout
    -------------------------------------------------
    |                 00:00:00                      |
    |   -----     ------------      --      -----   |
    |  |Start|   |Pause/Resume|    |FF|    |Reset|  |
    |   -----     ------------      --      -----   |
    -------------------------------------------------

    XY Layout
    -------------------------------------------------
    |          Lap  00       00:00:00               |
    |   -----     ------------      --      -----   |
    |  |Start|   |Pause/Resume|    |FF|    |Reset|  |
    |   -----     ------------      --      -----   |
    -------------------------------------------------

    Tabata Layout
    -------------------------------------------------
    |     Round  00/05      Work/Rest 00:00:00      |
    |  work|rest|work|rest|work|rest|work|rest|work |
    |   -----     ------------      --      -----   |
    |  |Start|   |Pause/Resume|    |FF|    |Reset|  |
    |   -----     ------------      --      -----   |
    -------------------------------------------------    

    References:
    https://health.clevelandclinic.org/tabata-vs-hiit-whats-the-difference/
    http://www.tabatatimer.com/
    https://fitlb.com/tabata-timer

  */


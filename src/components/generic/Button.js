import React from "react";
import styled from "styled-components";

/*TODO:
    1. Style button
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


const Button = (props) => {
  //console.log("isActive: " + props.isActive + " isPaused: " + props.isPaused + " time: " + props.time);

  if (!props.isActive && (props.isPaused || !props.isPaused) && props.time === 0) {
    return (
      <div>
        <StartButton onClick={props.handleStart}>
          Start
        </StartButton>
     </div>
    );
  }
//  else if ((props.isActive && !props.isPaused && props.time > 0) || (props.isPaused && props.time > 0) && props.time === props.maxTime) {
  else if (props.isActive && props.time === props.maxTime) { // Max Time reached or FF clicked.
    return(
      <div>
      <ResetButton onClick={props.handleReset}>
        Reset
      </ResetButton>
        <StartButton onClick={props.handleStart}>
          Start
        </StartButton>
     </div>
    );
  }
  else if ((props.isActive && !props.isPaused && props.time > 0) || (props.isPaused && props.time > 0)) {
    return (
      <div>
        <FFButton onClick={props.handleFastForward}>
          Fast Forward
        </FFButton>
        <ResetButton onClick={props.handleReset}>
          Reset
        </ResetButton>
        <PauseButton onClick={props.handlePauseResume}>
          {props.isPaused ? "Resume" : "Pause"}
        </PauseButton>
     </div>
    ); 
  }
};

export default Button;
  /* Types of buttons
  Start
  Pause
  Resume
  Reset
  Fast Forward

  Initial State
    Start button displayed
    Display at intial state
  Click Start
    Start button becomes Pause
    Reset and Fast Forward becomes active and displayed
    Display is updated continuously with timer values
  Click Pause
    Timer stops at current increment
    Pause button becomes Resume
    Other buttons remain
  Click Fast Forward
    Display fast forwarded to max timevalue
    Pause/Resume button removed
    Reset remains
  Click Reset
    Pause/Resume becomes Start button
    Reset buton removed
    Fast Forward button removed
    Display reset to initial values
  */


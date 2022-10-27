import React from "react";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds from "../generic/DisplayRounds";

const Panel = (props) => {

  if ((props.displayType === 'xy') || (props.displayType === 'tabata' )) {
    return(
      <div className="xy-timer">
        <DisplayRounds displayType={props.displayType} currentRound={props.currentRound} isStarted={props.isStarted}/>
        <DisplayTime time={props.time} isStarted={props.isStarted}/>
      </div>
    );
  } else {
    return(
      <div className="timer">
        <DisplayTime time={props.time} isStarted={props.isStarted}/>
      </div>
    );
  }
};

export default Panel;
import React from "react";
import styled from "styled-components";

/*const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;*/

const Panel = (props) => {
  const minutes = <span className="digits">{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>;
  const seconds = <span className="digits">{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}</span>;
  const milliseconds = <span className="digits mili-sec">.{("0" + ((props.time / 10) % 100)).slice(-2)}</span>;
  const rounds = <div>Round: {props.currentRound}</div>;
  const tabataRounds = <div>Round: {props.currentRound} <span className={props.isResting ? 'tabata-rest':'tabata-work'}>{props.isResting ? 'REST':'WORK'}</span></div>;

  if (props.displayType === 'xy' ) {
    return(
      <div className="xy-timer">
        {rounds}
        {minutes}
        {seconds}
        {milliseconds}
      </div>
    );
  } else if (props.displayType === 'tabata') {
    return(
      <div className="tabata-timer">
        {tabataRounds}
        {minutes}
        {seconds}
        {milliseconds}
      </div>
    );
  } else {
    return(
      <div className="timer">
        {minutes}
        {seconds}
        {milliseconds}
      </div>
    );
  }
};

export default Panel;
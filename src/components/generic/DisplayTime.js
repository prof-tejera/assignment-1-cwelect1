import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 2rem;
  background-color: green;
  height: 3rem;
  text-align: center;
`;

const DisplayTime = (props) => {
  const minutes = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2);
  const milliseconds = ("0" + ((props.time / 10) % 100)).slice(-2);
  
  return(
    <StyledDiv className="display-time">
      {minutes}
      :{seconds}
      .{milliseconds}
    </StyledDiv>
  );
};

export default DisplayTime;
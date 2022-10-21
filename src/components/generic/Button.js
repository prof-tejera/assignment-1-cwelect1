import React from "react";
import styled from "styled-components";

/*TODO:
    1. Style button
*/
const WrappedButton = styled.button`
  background-color: rgba(255, 122, 89, .5);
  cursor: pointer;
}
`;

const Button = (props) => {
  
  return (
    <WrappedButton onClick={props.onClick}>
      {props.text}
    </WrappedButton>
  );
};

export default Button;
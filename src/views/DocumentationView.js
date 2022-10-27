import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Buttons from "../components/generic/Buttons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

/**
 * You can document your components by using the DocumentComponent component
 */
const Documentation = () => {
  return (
    <Container>
      <div>
        <Title>Documentation</Title>
        <DocumentComponent
          title="Loading spinner "
          component={<Loading />}
          propDocs={[
            {
              prop: "size",
              description: "Changes the size of the loading spinner",
              type: "string",
              defaultValue: "medium",
            },
          ]}
        />
        <DocumentComponent
          title="Buttons "
          component={<Buttons />}
          propDocs={[
            {
              prop: "endTime",
              description: "The time at which a counter stops counting (milliseconds - e.g. 0 for a decrementing counter or 60000 for incrementing",
              type: "integer",
              defaultValue: "none",
            },
            {
              prop: "isStarted",
              description: "Indicates whether a counter has been started or not. This, isPaused, endTime, and time are used in conjuntion to determine what buttons are returned as active or disabled",
              type: "boolean",
              defaultValue: "none",
            },
            {
              prop: "isPaused",
              description: "Indicates whether a counter has been paused or not",
              type: "boolean",
              defaultValue: "none",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;

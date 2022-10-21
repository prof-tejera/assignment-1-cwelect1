import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Countdown from "../components/timers/Countdown";

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
          title="Countdown Timer "
          component={<Countdown />}
          propDocs={[
            {
              prop: "reset",
              description: "returns all settings to their default values and clears any state",
              type: "string",
              defaultValue: "medium",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;

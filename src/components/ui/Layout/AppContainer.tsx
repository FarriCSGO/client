import React from "react";
import styled from "styled-components";

const AppContainer = (props: any) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default AppContainer;

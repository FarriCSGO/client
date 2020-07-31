import React from "react";
import styled from "styled-components";

export const DashContainer = (props: any) => {
  return <DashWrapper>{props.children}</DashWrapper>;
};

const DashWrapper = styled.div`
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 7rem;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.size.small} {
    padding: 0.5rem;
    align-items: center;
  }
`;

export const AppContainer = (props: any) => {
  return <AppWrapper>{props.children}</AppWrapper>;
};

const AppWrapper = styled.div`
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

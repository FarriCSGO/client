import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

type TParams = { steamID64: string };

const Dashboard = ({ match }: RouteComponentProps<TParams>) => {
  const steamID64: string = match.params.steamID64;
  return (
    <PageContainer>
      <h1> THIS IS YOUR STATS DASHBOARD MATE </h1>
      <p> Your steam id = {steamID64} </p>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default Dashboard;

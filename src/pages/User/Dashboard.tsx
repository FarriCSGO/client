import React from "react";
import styled from "styled-components";

import ProfileCard from "../../components/core/dashboard/UserSteamDetailsCard";
import QuickStatsCard from "../../components/core/dashboard/QuickStatsCard";

interface IProps {
  steamID: string;
}

const Dashboard = (props: IProps) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Left>
          <CardDiv>
            <ProfileCard steamID={props.steamID} />
            <Heading>Quick Stats</Heading>
            <QuickStatsCard steamID={props.steamID} />
          </CardDiv>
          <CardDiv></CardDiv>
        </Left>
        <Right></Right>
      </div>
    </>
  );
};

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardDiv = styled.div`
  padding-bottom: 1.5rem;
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export default Dashboard;

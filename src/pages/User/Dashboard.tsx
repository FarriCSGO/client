import React from "react";
import styled from "styled-components";

import ProfileCard from "../../components/core/dashboard/UserSteamDetailsCard";

interface IProps {
  steamID: string;
}

const Dashboard = (props: IProps) => {
  return (
    <CardDiv>
      <ProfileCard steamID={props.steamID} />
    </CardDiv>
  );
};

const CardDiv = styled.div`
  display: none;

  @media ${(props) => props.theme.size.small} {
    display: inline-block;
  }
`;

export default Dashboard;

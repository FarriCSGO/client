import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";

import UserSteamDetailsCard from "../../components/core/dashboard/SteamDetailsCard";

type TParams = { steamID64: string };

const Dashboard = ({ match }: RouteComponentProps<TParams>) => {
  const steamID64: string = match.params.steamID64;

  // FIXME: If a user directly go to a dashboard/steamID64 URL with an invalid
  // steamID64, the APP CRASHES.
  return (
    <PageContainer>
      <Heading>YOU'RE A BOT MATE</Heading>
      <UserSteamDetailsCard steamID64={steamID64} />
      <LinkDiv>
        <Link to="/">
          <HomeButton>Home</HomeButton>
        </Link>
      </LinkDiv>
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

const LinkDiv = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;

  @media ${(props) => props.theme.size.small} {
    font-size: 1.25rem;
  }
`;

const HomeButton = styled.button`
  background: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.light};
  font-size: 1.25em;
  width: 7.5rem;
  height: 2.5rem;
  border: none;
  margin: 2rem auto;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default Dashboard;
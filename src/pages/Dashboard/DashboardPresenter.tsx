import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import styled from "styled-components";

import UserSteamDetailsCard from "../../components/core/dashboard/UserSteamDetailsCard";
import NavBar from "../../components/shared/NavBar/NavBar";
import SearchForm from "../../components/shared/SearchForm/SearchForm";

type TParams = { steamID: string };

const DashboardPresenter = ({ match }: RouteComponentProps<TParams>) => {
  const steamID: string = match.params.steamID;

  // FIXME: If a user directly go to a dashboard/steamID64 URL with an invalid
  // steamID64, the APP CRASHES. We should seperate the logic to Container
  // NOTE: The app crashes because an invalid steamID is passed down to
  // <UerSteamDetailsCard /> component.
  return (
    <PageContainer>
      <NavBar />
      <SearchBarWrapper>
        <SearchForm />
      </SearchBarWrapper>
      <UserSteamDetailsCard steamID={steamID} />
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

const SearchBarWrapper = styled.div`
  display: none;
  margin: 0 auto 1rem auto;

  @media ${(props) => props.theme.size.small} {
    display: block;
  }
`;

const HomeButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
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

export default DashboardPresenter;

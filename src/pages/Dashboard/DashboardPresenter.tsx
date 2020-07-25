import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { getUserSteamDetails } from "../../utils/api";

import UserSteamDetailsCard from "../../components/core/dashboard/UserSteamDetailsCard";
import NavBar from "../../components/shared/NavBar/NavBar";
import SearchForm from "../../components/shared/SearchForm/SearchForm";

type TParams = { steamID: string };

const DashboardPresenter = ({ match }: RouteComponentProps<TParams>) => {
  const steamID: string = match.params.steamID;

  useEffect(() => {
    const setDocTitle = async () => {
      const data = await getUserSteamDetails(steamID);
      const name = data.name;
      document.title = "Dashboard - " + name;
    };

    setDocTitle();
  }, [steamID]);

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

const SearchBarWrapper = styled.div`
  display: none;
  margin: 0 auto 1rem auto;

  @media ${(props) => props.theme.size.small} {
    display: block;
  }
`;

export default DashboardPresenter;

import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { getUserSteamDetails } from "../../utils/api";

import AppContainer from "../../components/ui/Layout/AppContainer";
import UserSteamDetailsCard from "../../components/core/dashboard/UserSteamDetailsCard";
import NavBar from "../../components/shared/NavBar/NavBar";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import LoadingCube from "../../components/ui/Animation/LoadingCube/LoadingCube";

type TParams = { steamID: string };

const DashboardPresenter = ({
  match,
  history
}: RouteComponentProps<TParams>) => {
  const [validID, setValidID] = useState(null);
  const steamID: string = match.params.steamID;

  useEffect(() => {
    const validateID = async () => {
      try {
        const data = await getUserSteamDetails(steamID);
        setValidID(data.steamID64);

        const name = data.name;
        document.title =
          name + " - Dashboard // Farri - Check your CS:GO Statistics";
      } catch (err) {
        history.push("/");
      }
    };
    validateID();
  });

  if (validID === null)
    return (
      <AppContainer>
        <NavBar />
        <SearchBarWrapper>
          <SearchForm />
        </SearchBarWrapper>
        <div style={{ textAlign: "center" }}>
          <LoadingCube />
        </div>
      </AppContainer>
    );

  return (
    <AppContainer>
      <NavBar />
      <SearchBarWrapper>
        <SearchForm />
      </SearchBarWrapper>
      <UserSteamDetailsCard steamID={steamID} />
    </AppContainer>
  );
};

const SearchBarWrapper = styled.div`
  display: none;
  margin: 0 auto 1rem auto;

  @media ${(props) => props.theme.size.small} {
    display: block;
  }
`;

export default DashboardPresenter;

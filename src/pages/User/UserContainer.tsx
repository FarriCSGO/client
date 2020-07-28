import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getUserSteamDetails } from "../../utils/api";
import styled from "styled-components";

import {
  DashContainer,
  AppContainer
} from "../../components/ui/Layout/AppContainer";
import NavBar from "../../components/shared/NavBar/NavBar";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import SideBar from "../../components/shared/SideBar/SideBar";
import SideBarMobile from "../../components/shared/SideBar/SideBarMobile";
import LoadingSpinner from "../../components/ui/Animation/LoadingSpinner/LoadingSpinner";

import Dashboard from "./Dashboard";
import Matches from "./Matches";
import Weapons from "./Weapons";
import Maps from "./Maps";
import Inventory from "./Inventory";

type TParams = { steamID: string };

const UserContainer = ({ match, history }: RouteComponentProps<TParams>) => {
  const [validID, setValidID] = useState(null);
  const steamID: string = match.params.steamID;

  const URL = history.location.pathname;

  // Redirect user to dashboard page if the URL is like `/user/:steamid/`
  if (URL.slice(23) === "/") history.push(`${URL}dashboard`);
  if (URL.slice(23) === "") history.push(`${URL}/dashboard`);

  useEffect(() => {
    const validateID = async () => {
      try {
        const data = await getUserSteamDetails(steamID);
        setValidID(data.steamID64);

        const name = data.name;
        document.title =
          name + " - Dashboard // Farri - Check your CS:GO Statistics";
      } catch (err) {
        // If the user enters an invalid steamID(anything) after /dashboard/{..}
        // we redirect the user to "/" or else the App would crash.
        history.push("/");
      }
    };
    validateID();
  });

  if (validID === null)
    return (
      <>
        <AppContainer>
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignSelf: "center",
              alignItems: "center"
            }}
          >
            <LoadingSpinner />
          </div>
        </AppContainer>
      </>
    );

  return (
    <>
      <SideBar steamID={steamID} {...match} />
      <SideBarMobile {...match} />
      <DashContainer>
        <NavBar />
        <SearchBarWrapper>
          <SearchForm />
        </SearchBarWrapper>
        {UserPageContent(URL, steamID)}
      </DashContainer>
    </>
  );
};

const UserPageContent = (URL: string, steamID: string) => {
  if (URL.endsWith("dashboard")) return <Dashboard steamID={steamID} />;
  if (URL.endsWith("matches")) return <Matches />;
  if (URL.endsWith("weapons")) return <Weapons />;
  if (URL.endsWith("maps")) return <Maps />;
  if (URL.endsWith("inventory")) return <Inventory />;
};

const SearchBarWrapper = styled.div`
  display: flex;
  margin: 1rem auto;
  padding-left: -1rem;

  @media ${(props) => props.theme.size.small} {
    display: none;
  }
`;

export default UserContainer;
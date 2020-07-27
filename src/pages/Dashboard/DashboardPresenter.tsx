import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getUserSteamDetails } from "../../utils/api";
import styled from "styled-components";

import { DashContainer } from "../../components/ui/Layout/AppContainer";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import SideBar from "../../components/shared/SideBar/SideBar";
import LoadingSpinner from "../../components/ui/Animation/LoadingSpinner/LoadingSpinner";

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
        <DashContainer>
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
        </DashContainer>
      </>
    );

  return (
    <>
      <SideBar steamID={steamID} />
      <DashContainer>
        <SearchBarWrapper>
          <SearchForm />
        </SearchBarWrapper>
        <h1> THIS IS YOUR DASHBOARD PAGE </h1>
      </DashContainer>
    </>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  margin: 1rem auto 1rem auto;
`;

export default DashboardPresenter;

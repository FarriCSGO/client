import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePulse } from "pulse-framework";
import core from "../../../core";

import Loading from "../../ui/Animation/LoadingSpinner/LoadingSpinner";

const SteamDetailsCard = () => {
  const [loading, setLoading] = useState(true);
  const [steamID] = usePulse([core.user.state.STEAM_ID]);
  const [userSteamDetails] = usePulse([core.user.state.USER_STEAM_DETAILS]);

  useEffect(() => {
    setLoading(true);

    // Stop showing loading spinner once userSteamDetails are fetched
    if (userSteamDetails.steamID === steamID) setLoading(false);

    return () => setLoading(false);
  }, [steamID, userSteamDetails]);

  if (loading === true) {
    return (
      <CardContainer>
        <AnimationDiv>
          <Loading />
        </AnimationDiv>
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      <CenterItems>
        <SteamLevel>{userSteamDetails.level}</SteamLevel>
        <AvatarDiv>
          <a
            href={`http://steamcommunity.com/profiles/${steamID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AvatarImage
              src={userSteamDetails.avatarURL}
              alt="steam profile avatar"
            ></AvatarImage>
          </a>
          <Name>{userSteamDetails.name}</Name>
        </AvatarDiv>
        <Status>{userSteamDetails.status}</Status>
      </CenterItems>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  margin: 0 auto;
  background: ${(props) => props.theme.color.surface};
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  width: 300px;
  height: 135px;
`;

const AnimationDiv = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100%;
`;

const CenterItems = styled.div`
  // TODO: Instead of cuttin the name, append "..."
  width: 300px;
`;

const Name = styled.p`
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.theme.color.primary};
  font-size: 1.3rem;
  margin-left: 0.5rem;
`;

const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0.15rem 0.75rem;
`;

const AvatarImage = styled.img`
  padding: 0.1rem;
  border-radius: 50px;
  width: 3rem;
  height: 3rem;
  border: 2px solid ${(props) => props.theme.color.primary};
`;

const SteamLevel = styled.p`
  font-weight: bold;
  height: 1rem;
  font-size: 1rem;
  margin: 0.5rem 0.5rem 0 0;
  padding: 0;
  text-align: right;
`;

const Status = styled.p`
  font-weight: normal;
  text-align: center;
  font-size: 0.95rem;
  padding: 0;
  margin: 0;
  margin-top: 0.35rem;
  color: ${(props) => {
    if (props.children === "Offline") return "#888888";
    else if (props.children === "Online") return "#047DC4";
    return "#39B924";
  }};
`;
export default SteamDetailsCard;

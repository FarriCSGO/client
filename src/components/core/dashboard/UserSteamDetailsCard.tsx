import React, { useState, useEffect } from "react";
import { getUserSteamDetails } from "../../../utils/api";
import styled from "styled-components";

import Loading from "../../ui/Animation/LoadingSpinner/LoadingSpinner";

interface IProps {
  steamID: string;
}

const SteamDetailsCard = (props: IProps) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getUserSteamDetails(props.steamID);

      setName(data.name);
      setLevel(data.steamLevel);
      setAvatarURL(data.avatarImageURL);

      if (data.onlineStatus === 0) {
        setStatus("Offline");
      }

      if (data.onlineStatus === 1 && data.playingGame) {
        setStatus(data.playingGame);
      }

      if (data.onlineStatus !== 0 && !data.playingGame) {
        setStatus("Online");
      }

      setLoading(false);
    };

    getData();
  }, [props.steamID]);

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
        <SteamLevel>{level}</SteamLevel>
        <AvatarDiv>
          <a
            href={`http://steamcommunity.com/profiles/${props.steamID}`}
            target="_blanl"
          >
            <AvatarImage
              src={avatarURL}
              alt="steam profile avatar"
            ></AvatarImage>
          </a>
          <Name>{name}</Name>
        </AvatarDiv>
        <Status>{status}</Status>
      </CenterItems>
    </CardContainer>
  );
};

const AnimationDiv = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 350px;
  height: 155px;
  left: 53px;
  top: 26px;

  background: ${(props) => props.theme.colors.surface};
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  @media ${(props) => props.theme.size.small} {
    width: 300px;
    height: 135px;
  }
`;

const CenterItems = styled.div`
  width: 350px;
  // TODO: Instead of cuttin the name, append "..."

  @media ${(props) => props.theme.size.small} {
    width: 300px;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.size.small} {
    font-size: 1.3rem;
    margin-left: 0.75rem;
  }
`;

const AvatarDiv = styled.div`
  margin: 0.25rem 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media ${(props) => props.theme.size.small} {
    margin: 0.15rem 0.75rem;
  }
`;

const AvatarImage = styled.img`
  width: 64px;
  height: 64px;
  padding: 0.1rem;
  border-radius: 50px;
  border: 3px solid ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.size.small} {
    width: 52px;
    height: 52px;
  }
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
  font-size: 1.1rem;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-top: 0.35rem;
  color: ${(props) => {
    if (props.children === "Offline") return "#888888";
    else if (props.children === "Online") return "#047DC4";
    return "#39B924";
  }};

  @media ${(props) => props.theme.size.small} {
    font-size: 0.95rem;
  }
`;
export default SteamDetailsCard;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePulse } from "pulse-framework";
import core from "../../../core";

import Loading from "../../ui/Animation/LoadingSpinner/LoadingSpinner";
import headshotImg from "../../../assets/images/quickStatsIcons/headshot.png";
import skullImg from "../../../assets/images/quickStatsIcons/skull_bones.png";
import { ReactComponent as Kd } from "../../../assets/images/quickStatsIcons/kd.svg";
import { ReactComponent as Trophy } from "../../../assets/images/quickStatsIcons/win_rate.svg";

const QuickStatsCard = () => {
  const [loading, setLoading] = useState(true);
  const [steamID] = usePulse([core.user.state.STEAM_ID]);
  const [quickStats] = usePulse([core.user.state.USER_QUICK_STATS]);

  useEffect(() => {
    setLoading(true);
    if (quickStats.steamID === steamID) setLoading(false);

    return () => setLoading(true);
  }, [steamID, quickStats]);

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
      <StatDiv>
        <Details>
          <h3 className="heading">Winrate</h3>
          <p className="statValue">{quickStats.winrate}%</p>
        </Details>
        <Icon>
          <Trophy />
        </Icon>
      </StatDiv>
      <StatDiv>
        <Details>
          <h3 className="heading">K / D Ratio</h3>
          <p className="statValue">{quickStats.kdRatio}</p>
        </Details>
        <Icon>
          <Kd />
        </Icon>
      </StatDiv>
      <StatDiv>
        <Details>
          <h3 className="heading">ADR</h3>
          <p className="statValue">{quickStats.adr}</p>
        </Details>
        <Icon>
          <img src={skullImg} alt="headshot icon" width="36px" />
        </Icon>
      </StatDiv>
      <StatDiv>
        <Details>
          <h3 className="heading">HS Rate</h3>
          <p className="statValue">{quickStats.hsRate}%</p>
        </Details>
        <Icon>
          <img src={headshotImg} alt="headshot icon" width="36px" />
        </Icon>
      </StatDiv>
    </CardContainer>
  );
};

export default QuickStatsCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: ${(props) => props.theme.color.surface};
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  width: 300px;
  height: 355px;
`;

const AnimationDiv = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100%;
`;

const StatDiv = styled.div`
  padding: 0.75rem 0;
  display: flex;
  height: 4rem;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

const Icon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.color.surface2};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  svg {
    width: 36px;
    height: 36px;
    fill: ${(props) => props.theme.color.primary};
    margin: 0 auto;
  }

  img {
    width: 36px;
    margin: 0 auto;
  }
`;

const Details = styled.div`
  .heading {
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => props.theme.color.primary};
  }

  .statValue {
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.color.onSurface};
  }
`;

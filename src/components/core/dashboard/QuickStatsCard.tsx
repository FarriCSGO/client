import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getQuickStats } from "../../../utils/api";

import Loading from "../../ui/Animation/LoadingSpinner/LoadingSpinner";
import headshotImg from "../../../assets/images/quickStatsIcons/headshot.png";
import skullImg from "../../../assets/images/quickStatsIcons/skull_bones.png";
import { ReactComponent as Kd } from "../../../assets/images/quickStatsIcons/kd.svg";
import { ReactComponent as Trophy } from "../../../assets/images/quickStatsIcons/win_rate.svg";

interface IProps {
  steamID: string;
}

const QuickStatsCard = (props: IProps) => {
  const [loading, setLoading] = useState(true);
  const [winrate, setWinrate] = useState(null);
  const [kdRatio, setRatio] = useState(null);
  const [adr, setAdr] = useState(null);
  const [hsRate, setRate] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const data = await getQuickStats(props.steamID);
      setWinrate(data.winrate.toFixed(2));
      setRatio(data.kdRatio.toFixed(2));
      setAdr(data.adr.toFixed(2));
      setRate(data.hsRate.toFixed(2));
      setLoading(false);
    };

    getData();

    return () => setLoading(false);
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
      <StatDiv>
        <Details>
          <h3 className="heading">Winrate</h3>
          <p className="statValue">{winrate}%</p>
        </Details>
        <Icon>
          <Trophy />
        </Icon>
      </StatDiv>
      <StatDiv>
        <Details>
          <h3 className="heading">K / D Ratio</h3>
          <p className="statValue">{kdRatio}</p>
        </Details>
        <Icon>
          <Kd />
        </Icon>
      </StatDiv>
      <StatDiv>
        <Details>
          <h3 className="heading">ADR</h3>
          <p className="statValue">{adr}</p>
        </Details>
        <Icon>
          <img src={skullImg} alt="headshot icon" width="36px" />
        </Icon>
      </StatDiv>
      <StatDiv>
        <Details>
          <h3 className="heading">HS Rate</h3>
          <p className="statValue">{hsRate}%</p>
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
  background: ${(props) => props.theme.colors.surface};
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
  background: ${(props) => props.theme.colors.surface2};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  svg {
    width: 36px;
    height: 36px;
    fill: ${(props) => props.theme.colors.primary};
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
    color: ${(props) => props.theme.colors.primary};
  }

  .statValue {
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.onSurface};
  }
`;

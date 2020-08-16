import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import core from "../../../core";
import image from "../../../assets/images/logo.png";

import {
  DashboardSVG,
  MatchesSVG,
  WeaponsSVG,
  MapsSVG,
  InventorySVG,
  MoonSVG,
  SunSVG
} from "../../ui/Icon/SVGS";

// props - has steamID and match object
const SideBar = (props: any) => {
  return (
    <Main>
      <LogoDiv>
        <Link to="/">
          <img src={image} alt="farri logo" height="42px" />
        </Link>
      </LogoDiv>
      <ItemList>
        <Item>
          <Link to={`${props.url}/dashboard`} className="navLink">
            <DashboardSVG />
            <span className="text"> Dashboard </span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/matches`} className="navLink">
            <MatchesSVG />
            <span className="text"> Matches</span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/weapons`} className="navLink">
            <WeaponsSVG />
            <span className="text"> Weapons</span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/maps`} className="navLink">
            <MapsSVG />
            <span className="text"> Maps</span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/inventory`} className="navLink">
            <InventorySVG />
            <span className="text"> Inventory</span>
          </Link>
        </Item>
      </ItemList>
      <ToggleDiv>
        <i onClick={core.ui.toggleTheme}>
          {core.ui.state.THEME_TYPE.value === "dark" ? <MoonSVG /> : <SunSVG />}
        </i>
      </ToggleDiv>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  top: 0px;
  left: 0px;
  z-index: 1000;
  height: 100vh;
  width: 6rem;
  background: ${(props) => props.theme.color.surface};
  color: ${(props) => props.theme.color.onSurface};
  transition: 200ms ease-out;

  &:hover {
    width: 20rem;

    .text {
      display: inline;
      color: ${(props) => props.theme.color.onSurface};
    }

    .card {
      visibility: visible;
    }
  }

  @media ${(props) => props.theme.screen.small} {
    display: none;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
  padding: 0 0 2rem 0;
  height: 5rem;
  align-items: center;

  .card {
    visibility: hidden;
    transition: 0ms;
  }

  img {
    visibility: visible;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100%;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;

  svg {
    stroke: ${(props) => props.theme.color.primary};
    height: 2.5rem;
    width: 2.5rem;
    padding-left: 1.75rem;
  }

  span {
    margin-left: 1rem;
  }

  .navLink {
    display: flex;
    align-items: center;
    height: 5rem;
    width: 100%;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: 400ms;
  }

  .navLink:hover {
    filter: grayscale(0%) opacity(1);
    background: ${(props) => props.theme.color.hoverSurface};
  }

  .text {
    display: none;
  }
`;

const ToggleDiv = styled.div`
  display: flex;
  margin: 1rem 0 1rem 1.75rem;
`;

export default SideBar;

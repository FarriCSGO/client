import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "./SideBar.module.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

import ProfileCard from "../../core/dashboard/UserSteamDetailsCard";
import Logo from "../../../assets/images/F_Logo.png";

import {
  DashboardSVG,
  MatchesSVG,
  WeaponsSVG,
  MapsSVG,
  InventorySVG,
  MoonSVG,
  SunSVG
} from "../../ui/Icon/SVGS";

const SideBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Main>
      <CardDiv>
        <div className="card">
          <ProfileCard steamID="76561198893083379" />
        </div>
      </CardDiv>
      <ItemList>
        <Item>
          <Link to="/" className="navLink">
            <DashboardSVG />
            <span className="text"> Dashboard </span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <MatchesSVG />
            <span className="text"> Matches</span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <WeaponsSVG />
            <span className="text"> Weapons</span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <MapsSVG />
            <span className="text"> Maps</span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <InventorySVG />
            <span className="text"> Inventory</span>
          </Link>
        </Item>
      </ItemList>
      <ToggleMode onClick={toggleTheme}>
        {theme === "dark" ? <MoonSVG /> : <SunSVG />}
      </ToggleMode>
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
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.onSurface};
  transition: 200ms ease-out;

  &:hover {
    width: 20rem;

    .text {
      display: inline;
      color: ${(props) => props.theme.colors.onSurface};
    }

    .card {
      visibility: visible;
    }
  }
`;

const CardDiv = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
  padding: 0;
  height: 10rem;

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
    stroke: ${(props) => props.theme.colors.primary};
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
    background: ${(props) => props.theme.colors.hoverSurface};
  }

  .text {
    display: none;
  }
`;

const ToggleMode = styled.i`
  display: flex;
  margin: 1rem 0 1rem 1.75rem;
`;

export default SideBar;

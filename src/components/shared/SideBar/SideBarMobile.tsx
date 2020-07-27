import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeContext";

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
      <ItemList>
        <Item>
          <Link to="/" className="navLink">
            <DashboardSVG />
            <span className="text"> Inventory</span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <MatchesSVG />
            <span className="text"> Inventory</span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <WeaponsSVG />
            <span className="text"> Inventory</span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <MapsSVG />
            <span className="text"> Inventory</span>
          </Link>
        </Item>
        <Item>
          <Link to="/" className="navLink">
            <InventorySVG />
            <span className="text"> Inventory</span>
          </Link>
        </Item>
      </ItemList>
      <ToggleDiv>
        <i onClick={toggleTheme}>
          {theme === "dark" ? <MoonSVG /> : <SunSVG />}
        </i>
      </ToggleDiv>
    </Main>
  );
};

const Main = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }

  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1000;
  height: 4rem;
  width: 100vw;
  background: ${(props) => props.theme.colors.surface2};

  @media only screen and (max-width: 548px) {
    height: 3rem;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 100%;

  .text {
    color: ${(props) => props.theme.colors.onSurface};

    @media only screen and (max-width: 548px) {
      display: none;
    }
  }
`;

const Item = styled.li`
  svg {
    stroke: ${(props) => props.theme.colors.primary};
    height: 2rem;
    width: 2rem;
  }

  .navLink {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    align-items: center;
    text-decoration: none;
  }
`;

const ToggleDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 1rem;
`;

export default SideBar;

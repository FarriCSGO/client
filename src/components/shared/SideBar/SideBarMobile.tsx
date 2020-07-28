import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  DashboardSVG,
  MatchesSVG,
  WeaponsSVG,
  MapsSVG,
  InventorySVG
} from "../../ui/Icon/SVGS";

const SideBar = (props: any) => {
  return (
    <Main>
      <ItemList>
        <Item>
          <Link to={`${props.url}/dashboard`} className="navLink">
            <DashboardSVG />
            <span className="text">Dashboard</span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/matches`} className="navLink">
            <MatchesSVG />
            <span className="text">Matches</span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/weapons`} className="navLink">
            <WeaponsSVG />
            <span className="text">Weapons</span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/maps`} className="navLink">
            <MapsSVG />
            <span className="text">Maps</span>
          </Link>
        </Item>
        <Item>
          <Link to={`${props.url}/inventory`} className="navLink">
            <InventorySVG />
            <span className="text">Inventory</span>
          </Link>
        </Item>
      </ItemList>
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
  margin: 0 0.5rem;
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

export default SideBar;

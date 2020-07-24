import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/ThemeContext";
import { SunSVG } from "../../ui/Icon/SVGS";
import Logo from "../../ui/Icon/Logo";

const NavBar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <MainWrapper>
      <Left href="https://farri.netlify.app">
        <Logo />
      </Left>
      <Right>
        <ToggleMode onClick={toggleTheme}>
          <SunSVG />
        </ToggleMode>
      </Right>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  padding: 0 2rem;

  @media ${(props) => props.theme.size.small} {
    padding: 0 0.5rem;
    height: 3rem;
  }
`;

const Left = styled.a`
  align-self: center;
`;

const Right = styled.div`
  display: flex;
`;

const ToggleMode = styled.i`
  align-self: center;

  @media ${(props) => props.theme.size.small} {
    margin-left: 0.2rem;
  }
`;

export default NavBar;

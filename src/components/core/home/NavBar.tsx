import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/ThemeContext";
import { SunSVG } from "../../ui/Icon/SVGS";
import Logo from "../../ui/Icon/Logo";

import SearchForm from "../home/SearchForm";

interface IProps {
  HomePage?: boolean;
}

const NavBar = (props: IProps) => {
  const { toggleTheme } = useContext(ThemeContext);

  if (props.HomePage === true) {
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
  }

  return (
    <MainWrapper>
      <Left href="https://farri.netlify.app">
        <Logo />
      </Left>
      <Middle>
        <SearchForm HomePage={false} />
      </Middle>
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
  height: 6rem;
  padding: 0 1.5rem 1rem 1.5rem;

  @media ${(props) => props.theme.size.small} {
    padding: 0 0.5rem;
    height: 4rem;
  }
`;

const Left = styled.a`
  align-self: center;
`;

const Middle = styled.div`
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

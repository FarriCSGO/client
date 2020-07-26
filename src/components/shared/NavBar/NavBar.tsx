import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/ThemeContext";
import { SunSVG, MoonSVG } from "../../ui/Icon/SVGS";
import Logo from "../../ui/Icon/Logo";

import SearchForm from "../SearchForm/SearchForm";

interface IProps {
  HomePage?: boolean;
}

const NavBar = (props: IProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (props.HomePage === true) {
    return (
      <MainWrapper>
        <Left>
          <Link to="/">
            <Logo />
          </Link>
        </Left>
        <Right>
          <ToggleMode onClick={toggleTheme}>
            {theme === "dark" ? <MoonSVG /> : <SunSVG />}
          </ToggleMode>
        </Right>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <Left>
        <Link to="/">
          <Logo />
        </Link>
      </Left>
      <Middle>
        <SearchForm />
      </Middle>
      <Right>
        <ToggleMode onClick={toggleTheme}>
          {theme === "dark" ? <MoonSVG /> : <SunSVG />}
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

const Left = styled.div`
  align-self: center;
`;

const Middle = styled.div`
  align-self: center;
  margin: 0 auto;

  @media ${(props) => props.theme.size.small} {
    display: none;
  }
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

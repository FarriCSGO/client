import React, { useEffect } from "react";
import styled from "styled-components";

import AppContainer from "../../components/ui/Layout/AppContainer";
import Quotes from "../../components/core/home/Quotes";
import NavBar from "../../components/shared/NavBar/NavBar";
import SearchForm from "../../components/shared/SearchForm/SearchForm";
import { GithubSVG } from "../../components/ui/Icon/SVGS";

const HomePresenter = () => {
  useEffect(() => {
    document.title = "Farri - Check your CS:GO Statistics";
  }, []);

  return (
    <AppContainer>
      <NavBar HomePage={true} />
      <Quotes />
      <SearchBoxContainer>
        <Title>Counter-Strike Global Offensive Statistics Tool</Title>
        <MobileTitle>CS:GO Statistics Tool</MobileTitle>
        <SearchForm />
      </SearchBoxContainer>
      <GithubContainer>
        <GithubText> Contribute on </GithubText>
        <a
          href="https://github.com/FarriCSGO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyButton>
            <Span>Github</Span>
            <GithubSVG />
          </MyButton>
        </a>
      </GithubContainer>
    </AppContainer>
  );
};

const SearchBoxContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 5rem 1rem;
`;

const GithubContainer = styled.section`
  display: flex;
  flex: 0;
  align-self: center;
  align-items: center;
  margin-top: 5rem;

  a {
    &:link {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
      color: ${(props) => props.theme.colors.dark};
    }
    &:hover {
      text-decoration: none;
      color: ${(props) => props.theme.colors.dark};
    }
    &:active {
      text-decoration: none;
      color: ${(props) => props.theme.colors.dark};
    }
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.dark};
    }
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.dark};

  @media ${(props) => props.theme.size.small} {
    font-size: 1rem;
    display: none;
  }

  @media ${(props) => props.theme.size.medium} {
    font-size: 1.5rem;
  }
`;

const MobileTitle = styled.h1`
  font-size: 1.25rem;
  display: none;
  color: ${(props) => props.theme.colors.dark};

  @media ${(props) => props.theme.size.small} {
    display: inline-block;
  }
`;

const GithubText = styled.h3`
  font-weight: normal;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.dark};
  margin-right: 0.5rem;

  @media ${(props) => props.theme.size.small} {
    font-size: 0.75rem;
    margin-right: 0.35rem;
  }
`;

const MyButton = styled.button`
  font-style: normal;
  font-weight: normal;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  border-radius: 50px;
  padding: 2px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border: none;
  display: flex;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.size.small} {
    padding: 2px 14px;
  }
`;

const Span = styled.span`
  margin: auto 0.2rem auto 0;
  font-size: 1rem;

  @media ${(props) => props.theme.size.small} {
    font-size: 0.75rem;
  }
`;

export default HomePresenter;

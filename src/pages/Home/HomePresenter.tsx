import React, { useEffect } from "react";
import styled from "styled-components";

import AppContainer from "../../components/ui/Layout/AppContainer";
import Quotes from "../../components/core/home/Quotes";
import NavBar from "../../components/shared/NavBar/NavBar";
import SearchForm from "../../components/shared/SearchForm/SearchForm";

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
        <MobileTitle>CSGO Statistics Tool</MobileTitle>
        <SearchForm />
      </SearchBoxContainer>
    </AppContainer>
  );
};

const SearchBoxContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
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

  @media ${(props) => props.theme.size.small} {
    display: inline-block;
  }
`;

export default HomePresenter;

import React from "react";
import styled from "styled-components";

import Quotes from "../../components/home/quotes";
import NavBar from "../../components/home/navBar";
import SearchForm from "../../components/home/searchForm";

const Home = () => {
  return (
    <PageContainer>
      <NavBar />
      <Quotes />
      <SearchBoxContainer>
        <Title>Counter-Strike Global Offensive Statistics Tool</Title>
        <MobileTitle>CSGO Statistics Tool</MobileTitle>
        <SearchForm />
      </SearchBoxContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SearchBoxContainer = styled.main`
  align-items: center;
  align-self: center;
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

export default Home;

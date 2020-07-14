import React from "react";
import styled from "styled-components";

import Quotes from "../../components/home/quotes/quotes";
import NavBar from "../../components/home/navBar/navBar";
import SearchTextBox from "../../components/ui/searchTextBox/searchTextBox";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <Quotes />
      <SearchBoxContainer>
        <Title>Counter-Strike: Global Offensive Statistics Tool</Title>
        <SearchTextBox />
      </SearchBoxContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 100vh;
  max-width: 75rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: #0a0a0a;
`;

const SearchBoxContainer = styled.main`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

export default Home;

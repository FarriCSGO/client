import React from "react";
import styled from "styled-components";

import Quotes from "../../components/home/quotes";
import NavBar from "../../components/home/navBar";
import SearchForm from "../../components/home/searchForm";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <Quotes />
      <SearchBoxContainer>
        <Title>Counter-Strike: Global Offensive Statistics Tool</Title>
        <SearchForm />
      </SearchBoxContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 100vh;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  width: 100%;
`;

export default Home;

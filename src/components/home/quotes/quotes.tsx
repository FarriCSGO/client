import React from "react";
import styled from "styled-components";
import Axios from "../../../utils/Axios";

const quotes = () => {
  Axios.get("/api/quotesByPros")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return (
    <MainWrapper>
      <h1>Quotes said by CSGO Pros Component</h1>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  height: 10rem;
`;

export default quotes;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import QuotesData from "../../../data/quotesByPros.json";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [person, setPerson] = useState("");

  useEffect(() => {
    const randomNumber: number = Math.floor(Math.random() * 22);
    const quote: string = QuotesData.quotes[randomNumber].quote;
    const person: string = QuotesData.quotes[randomNumber].person;

    setQuote(quote);
    setPerson(person);
  }, []);

  return (
    <MainWrapper>
      <QuoteWrapper>
        <Quote>"{quote}"</Quote>
        <Person>{person}</Person>
      </QuoteWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  height: 10rem;
  text-align: center;
  padding: 1rem;

  @media ${(props) => props.theme.size.small} {
    height: 7.5rem;
  }
`;

const QuoteWrapper = styled.div`
  padding-top: 2rem;
  display: inline-block;
  height: 100%;
  max-width: 55rem;
`;

const Quote = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  margin: 0;

  @media ${(props) => props.theme.size.small} {
    font-size: 1rem;
  }
`;

const Person = styled.h3`
  font-size: 1rem;
  font-weight: bold;

  @media ${(props) => props.theme.size.small} {
    font-size: 0.75rem;
  }
`;

export default Quotes;

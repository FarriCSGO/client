import React from "react";
import styled from "styled-components";

import QuotesData from "../../data/quotesByPros.json";

interface IState {
  quote: string;
  person: string;
  error: boolean;
}

class Quotes extends React.Component {
  state: IState = {
    quote: "",
    person: "",
    error: false
  };

  componentDidMount = async () => {
    const randomNumber: number = Math.floor(Math.random() * 22);
    const Quote: string = QuotesData.quotes[randomNumber].quote;
    const Person: string = QuotesData.quotes[randomNumber].person;

    this.setState({ quote: Quote, person: Person });
  };

  render() {
    return (
      <MainWrapper>
        <QuoteWrapper>
          <Quote>"{this.state.quote}"</Quote>
          <Person>{this.state.person}</Person>
        </QuoteWrapper>
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  height: 10rem;
  display: block;
  text-align: center;
`;

const QuoteWrapper = styled.div`
  padding-top: 2rem;
  display: inline-block;
  width: 50rem;
  height: 100%;
`;

const Quote = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
  margin: 0;
`;

const Person = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  padding-right: 3rem;
`;

export default Quotes;

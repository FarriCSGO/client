import React from "react";
import styled from "styled-components";

import QuotesData from "../../../data/quotesByPros.json";

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
}
`;

export default Quotes;

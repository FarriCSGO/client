import React from "react";
import styled from "styled-components";

import LoadingAnimation from "../../ui/loadingAnimation/loadingAnimation";
import QuotesData from "../../../data/quotesByPros.json";

interface IState {
  loading: boolean;
  quote: string;
  person: string;
  error: boolean;
}

class Quotes extends React.Component {
  state: IState = {
    loading: true,
    quote: "",
    person: "",
    error: false
  };

  componentDidMount = async () => {
    const randomNumber: number = Math.floor(Math.random() * 3);
    const Quote: string = QuotesData.quotes[randomNumber].quote;
    const Person: string = QuotesData.quotes[randomNumber].person;

    this.setState({ loading: false, quote: Quote, person: Person });
  };

  render() {
    let content = <LoadingAnimation />;

    if (this.state.loading === false) {
      content = (
        <div>
          <Quote>"{this.state.quote}"</Quote>
          <Person>{this.state.person}</Person>
        </div>
      );
    }

    return <MainWrapper>{content}</MainWrapper>;
  }
}

const MainWrapper = styled.div`
  height: 10rem;
  display: block;
  text-align: center;
`;

const Quote = styled.h2`
  font-size: 1.3rem;
  font-weight: normal;
`;

const Person = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

export default Quotes;

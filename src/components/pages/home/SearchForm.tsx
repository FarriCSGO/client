import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SearchTextBox from "../../../ui/searchTextBox/searchTextBox";

import getSteamID64 from "../../../helpers/getSteamID64";

interface IState {
  queryText: string;
}

class searchForm extends React.Component<RouteComponentProps> {
  state: IState = {
    queryText: ""
  };

  formSubmitHandler = async (event: any) => {
    event.preventDefault();

    const queryText: string = this.state.queryText;

    try {
      const steamID64 = await getSteamID64(queryText);

      if (steamID64 === false) {
        // THIS MEANS THE "INVALID SEARCH" ALERT WAS SHOWN TO USER
        // We don't do anything. Just stay on this page for another query.
      } else {
        this.props.history.push(`/dashboard/${steamID64}`);
      }
    } catch (error) {
      alert("USER DOES NOT EXIST");
    }
  };

  setQuery = (event: any) => {
    this.setState({ queryText: event.target.value });
  };

  render() {
    return (
      <form onSubmit={(event) => this.formSubmitHandler(event)}>
        <SearchTextBox onChange={this.setQuery} />
      </form>
    );
  }
}

export default withRouter(searchForm);

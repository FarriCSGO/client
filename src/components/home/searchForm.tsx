import React from "react";

import SearchTextBox from "../ui/searchTextBox/searchTextBox";

import getSteamID64 from "../../helpers/getSteamID64";

interface IState {
  queryText: string;
}

class searchForm extends React.Component {
  state: IState = {
    queryText: ""
  };

  formSubmitHandler = async (event: any) => {
    event.preventDefault();

    const queryText: string = this.state.queryText;
    console.log("QUERY =", queryText);

    try {
      const steamID64 = await getSteamID64(queryText);

      if (steamID64 === false) {
        // THIS MEANS THE "INVALID SEARCH" ALERT WAS SHOWN TO USER
        // TODO: We don't do anything. Just stay on this page for another query.
      } else {
        // TODO: IF A VALID `SteamID64` is fetched then we should redirect
        // (<Link to..> of react-router-dom, to `/dashboard/steamID64`
      }

      console.log("STEAMID64 =", steamID64);
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

export default searchForm;

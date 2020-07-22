import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SearchTextBox from "../../ui/SearchTextBox/SearchTextBox";

import parseSearchQuery from "../../../helpers/parseSearchQuery";

const SearchForm = ({ history }: RouteComponentProps) => {
  const [query, setQuery] = useState("");

  const formSubmitHandler = async (event: any) => {
    event.preventDefault();

    const queryText: string = query;

    try {
      const steamID = await parseSearchQuery(queryText);

      if (steamID === false) {
        alert("INVALID SEARCH");
      } else {
        history.push(`/dashboard/${steamID}`);
      }
    } catch (error) {
      alert("USER DOES NOT EXIST");
    }
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={(event) => formSubmitHandler(event)}>
      <SearchTextBox onChange={handleQuery} />
    </form>
  );
};

export default withRouter(SearchForm);

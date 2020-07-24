import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SearchTextBox from "../../ui/SearchTextBox/SearchTextBox";
import ErrorModal from "../../ui/Modal/ErrorModal";

import parseSearchQuery from "../../../helpers/parseSearchQuery";

const SearchForm = ({ history }: RouteComponentProps) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const formSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    event.preventDefault();

    try {
      const steamID = await parseSearchQuery(query);

      if (steamID === false) {
        setError(true);
        setErrorMsg("Invalid search query");
      } else {
        history.push(`/dashboard/${steamID}`);
      }
    } catch (error) {
      setError(true);
      setErrorMsg("User does not exist in steam database");
    }
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setQuery(event.target.value);
  };

  let errorModal;
  if (error) {
    errorModal = (
      <ErrorModal message={errorMsg} onClose={(): any => setError(false)} />
    );
  }

  return (
    <>
      {errorModal}
      <form onSubmit={(event) => formSubmitHandler(event)}>
        <SearchTextBox onChange={handleQuery} />
      </form>
    </>
  );
};

export default withRouter(SearchForm);

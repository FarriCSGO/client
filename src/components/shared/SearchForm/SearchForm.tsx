import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SearchTextBox from "../../ui/SearchTextBox/SearchTextBox";
import ErrorModal from "../../ui/Modal/ErrorModal";
import LoadingBar from "../../ui/Animation/LoadingBar/LoadingBar";

import parseSearchQuery from "../../../helpers/parseSearchQuery";

const SearchForm = ({ history }: RouteComponentProps) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement>
  ) => {
    event.preventDefault();

    try {
      setLoading(true);
      const steamID = await parseSearchQuery(query);

      if (steamID === false) {
        setError(true);
        setLoading(false);
        setErrorMsg("Invalid search query");
      } else {
        setLoading(false);
        history.push(`/user/${steamID}/dashboard`);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMsg("User does not exist in steam database");
    }
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setQuery(event.target.value);
  };

  let errorModal, loadingBar;
  if (error) {
    errorModal = (
      <ErrorModal message={errorMsg} onClose={(): any => setError(false)} />
    );
  }

  if (loading) {
    loadingBar = <LoadingBar />;
  }

  return (
    <>
      {errorModal}
      {loadingBar}
      <form onSubmit={(event) => formSubmitHandler(event)}>
        <SearchTextBox onChange={handleQuery} />
      </form>
    </>
  );
};

export default withRouter(SearchForm);

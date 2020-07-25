import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SearchTextBox from "../../ui/SearchTextBox/SearchTextBox";
import ErrorModal from "../../ui/Modal/ErrorModal";
import LoadingBar from "../../ui/Animation/LoadingBar/LoadingBar";

import parseSearchQuery from "../../../helpers/parseSearchQuery";

interface IProps extends RouteComponentProps {
  HomePage?: boolean;
}

const SearchForm = ({ history, HomePage }: IProps) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

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
        <SearchTextBox onChange={handleQuery} HomePage={HomePage} />
      </form>
    </>
  );
};

export default withRouter(SearchForm);

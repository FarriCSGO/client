import React from "react";
import styled from "styled-components";

const TextBox = styled.input`
  width: 800px;
  height: 65px;
  background: #ffffff;
  border: 3px solid ${(props) => props.theme.colors.orange};
  border-radius: 50px;
  margin: 0 auto;
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
  padding-left: 20px;
  color: #0a0a0a;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;

const searchTextBox = () => {
  return (
    <>
      <TextBox
        type="text"
        placeholder="STEAM ID / STEAM PROFILE / MATCH SHARE CODE"
        autoFocus
      />
    </>
  );
};

export default searchTextBox;

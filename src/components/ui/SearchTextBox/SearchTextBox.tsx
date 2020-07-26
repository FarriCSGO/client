import React from "react";
import styled from "styled-components";

interface IProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => {};
}

const searchTextBox = (props: IProps) => {
  return (
    <>
      <TextBox
        type="text"
        placeholder="STEAM ID / STEAM PROFILE"
        autoFocus
        onChange={props.onChange}
      />
    </>
  );
};

const TextBox = styled.input<IProps>`
  width: 40rem;
  height: 3rem;
  background: ${(props) => props.theme.colors.background2};
  border: 0.1875rem solid ${(props) => props.theme.colors.primary};
  border-radius: 3.125rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: normal;
  padding-left: 1.5rem;
  color: ${(props) => props.theme.colors.text};

  &:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  }

  @media ${(props) => props.theme.size.small} {
    width: 90vw;
    height: 2.5rem;
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
    font-size: 0.85rem;
    padding-left: 1rem;

    &:focus {
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    }
  }

  @media ${(props) => props.theme.size.medium} {
    width: 30rem;
    height: 2.5rem;
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
    font-size: 0.85rem;
    padding-left: 1rem;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textFaint};
  }

  &:focus {
    outline: none;
  }
`;

export default searchTextBox;

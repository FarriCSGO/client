import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => {};
  style?: any;
  primary?: boolean;
  autoFocus?: boolean;
}

const Button = (props: ButtonProps) => {
  let style = props.style || {};

  if (props.autoFocus) {
    return (
      <MyButton style={style} onClick={props.onClick} autoFocus>
        {props.text}
      </MyButton>
    );
  }

  return (
    <MyButton style={style} onClick={props.onClick}>
      {props.text}
    </MyButton>
  );
};

const MyButton = styled.button`
  font-style: normal;
  font-weight: normal;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  border-radius: 50px;
  padding: 8px 32px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;

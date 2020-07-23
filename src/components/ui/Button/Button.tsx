import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => {};
  style?: any;
  primary?: boolean;
}

const Button = (props: ButtonProps) => {
  let style = props.style || {};
  return (
    <MyButton style={style} onClick={props.onClick}>
      {props.text}
    </MyButton>
  );
};

const MyButton = styled.button`
  font-style: normal;
  font-weight: normal;
  background-color: #fff;
  color: ${(props) => props.theme.colors.dark};
  border: 0.125rem solid ${(props) => props.theme.colors.orange};
  border-radius: 50px;
  padding: 8px 32px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.18);

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;

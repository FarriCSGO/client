import React from "react";
import styled from "styled-components";

import image from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Wrapper>
      <img src={image} alt="farri logo" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    height: 56px;

    @media ${(props) => props.theme.size.small} {
      height: 42px;
    }
  }
`;

export default Logo;

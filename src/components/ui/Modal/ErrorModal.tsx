import React, { useEffect, useCallback } from "react";
import styled from "styled-components";

import Button from "../Button/Button";

interface ErrorModalProps {
  message: string;
  onClose: () => {};
}

const ErrorModal = (props: ErrorModalProps) => {
  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        props.onClose();
      }
    },
    [props]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <>
      <Backdrop onClick={props.onClose} />
      <ModalWrapper>
        <MainText> Error Occurred! </MainText>
        <Message> {props.message} </Message>
        <Actions>
          <Button text="Close" onClick={props.onClose} autoFocus={true} />
        </Actions>
      </ModalWrapper>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 50;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 30vh;
  left: calc(50% - 15rem);
  width: 30rem;
  height: 15rem;
  background: ${(props) => props.theme.color.surface};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 100;
  border-radius: 7px;

  @media ${(props) => props.theme.screen.small} {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 25vh;
    left: calc(10% - 1rem);
    width: 85vw;
    height: 12rem;
  }
`;

const Actions = styled.div`
  display: flex;
  padding: 0 1rem 1rem 0;
  justify-content: flex-end;
`;

const MainText = styled.h2`
  margin: 0;
  padding: 1rem;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.onPrimary};
  border-radius: 7px 7px 0 0;
`;

const Message = styled.p`
  margin: 0;
  padding: 1rem;
  height: 6rem;
  color: ${(props) => props.theme.color.onSurface};
`;

export default ErrorModal;

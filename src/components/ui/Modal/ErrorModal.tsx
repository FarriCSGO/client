import React from "react";
import styled from "styled-components";

interface ErrorModalProps {
  onClose: () => any;
  message: string;
}

const ErrorModal = (props: ErrorModalProps) => {
  return (
    <>
      <Backdrop onClick={props.onClose} />
      <ModalWrapper>
        <MainText> An Error Occurred! </MainText>
        <Message> {props.message} </Message>
        <Actions>
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
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
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  z-index: 100;
  border-radius: 7px;
`;

const Actions = styled.div`
  display: flex;
  padding: 0 2rem 1rem 0;
  justify-content: flex-end;
`;

const MainText = styled.h2`
  margin: 0;
  padding: 1rem;
  background: ${(props) => props.theme.colors.orange};
  color: white;
  border-radius: 7px 7px 0 0;
`;

const Message = styled.p`
  margin: 0;
  padding: 1rem;
  height: 6.5rem;
`;

export default ErrorModal;

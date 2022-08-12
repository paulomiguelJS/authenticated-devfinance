import { useState } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import Modal from "react-modal";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

export function NewTransactionModal({ isOpen, onRequestClose }) {
  const [type, setType] = useState("deposit");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <RadioBox
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close Modal" />
      </RadioBox>
      <Container>
        <h2>Add transaction</h2>
        <input placeholder="Title" />
        <input type="number" placeholder="Amount" />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>
          <button
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Income</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Category" />
        <button type="submit">Add Transaction</button>
      </Container>
    </Modal>
  );
}

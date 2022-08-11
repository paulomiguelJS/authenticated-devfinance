import { Container, TransactionTypeContainer } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import closeImg from "../../assets/close.svg";

import Modal from "react-modal";

export function NewTransactionModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close Modal" />
      </button>
      <Container>
        <h2>Add transaction</h2>
        <input placeholder="Title" />
        <input type="number" placeholder="Amount" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </button>
          <button type="button">
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

import { Container } from "./styles";
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
        <input placeholder="Category" />
        <button type="submit">Add Transaction</button>
      </Container>
    </Modal>
  );
}

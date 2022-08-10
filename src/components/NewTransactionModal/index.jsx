import { Container } from "./styles";

import Modal from "react-modal";

export function NewTransactionModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
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

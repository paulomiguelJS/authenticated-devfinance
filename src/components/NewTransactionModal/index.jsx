import Modal from "react-modal";

export function NewTransactionModal({ isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add transaction</h2>
    </Modal>
  );
}

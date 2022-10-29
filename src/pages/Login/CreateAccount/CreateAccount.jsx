import { useState } from "react";
import Modal from "react-modal";

export function SignIn({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h1>Teste</h1>
    </Modal>
  );
}

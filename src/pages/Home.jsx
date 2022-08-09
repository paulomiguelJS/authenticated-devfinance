import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { useState } from "react";
import Modal from "react-modal";
export function Home() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Modal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Add transaction</h2>
      </Modal>
      <Dashboard />
    </>
  );
}

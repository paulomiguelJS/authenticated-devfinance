import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "../components/NewTransactionModal";
import { TransactionsProvider } from "../TransactionsContext";

Modal.setAppElement("#root");

export function Home() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  );
}

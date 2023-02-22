import { createContext, useState, useContext } from "react";
// import firebase from "../services/firebaseConnection";
const TransactionsContext = createContext([]);

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  async function createTransaction(transactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}

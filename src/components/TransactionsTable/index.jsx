import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("us-EN", {
                    style: "currency",
                    currency: "USD",
                  }).format(transaction.amount)}
                  {transaction.amount}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("us-EN").format(
                    new Date(transaction.createdAt),
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>$1000.00</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>- $1000.00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>$1000.00</strong>
      </div>
    </Container>
  );
}

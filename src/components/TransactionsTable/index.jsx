import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Web developed</td>
            <td className="deposit">$300.00</td>
            <td>Developement</td>
            <td>02/20/2022</td>
          </tr>
          <tr>
            <td>Web developed</td>
            <td className="withdraw">$500.00</td>
            <td>Developement</td>
            <td>02/20/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

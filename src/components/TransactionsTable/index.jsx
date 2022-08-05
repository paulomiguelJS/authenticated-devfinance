import { Container } from "../Header/styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Ti</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
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
        </thead>
      </table>
    </Container>
  );
}

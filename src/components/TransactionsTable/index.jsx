import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:5173/api/transacitons")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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

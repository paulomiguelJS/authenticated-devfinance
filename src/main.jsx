import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import App from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transacitons", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

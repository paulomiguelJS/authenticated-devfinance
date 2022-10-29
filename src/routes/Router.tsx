import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { CreateAccount } from "../pages/CreateAccount/CreateAccount";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

import { Container, LeftSide, RightSide } from "./styles";
import dollarIcon from "../../assets/dollar-icon.svg";

export function Login() {
  return (
    <Container>
      <div>
        <LeftSide>
          <img src={dollarIcon} alt="IMG" />
          <h4>Login here to see your transactions</h4>
        </LeftSide>
        <RightSide>
          <form>
            <h5>Log in</h5>
            <label>Email</label>
            <input type="text" placeholder="" />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your Password" />
            <a href="">Forgot password?</a>
            <button>Login</button>
          </form>
        </RightSide>
      </div>
    </Container>
  );
}

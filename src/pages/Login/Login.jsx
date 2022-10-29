import { Container, LeftSide, RightSide } from "./styles";
import dollarIcon from "../../assets/dollar-icon.svg";

export function Login({ SignIn }) {
  return (
    <Container>
      <LeftSide>
        <div>
          <div>
            <img src={dollarIcon} alt="IMG" />
            <h4>
              Finance Manager is a professional responsible for preparing a
              personal’s financial reports.
            </h4>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <div>
          <form>
            <h5>Log in</h5>
            <label>Email</label>
            <input type="text" placeholder="paul@email.com" />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter your Password" />
            <button type="button" onClick={SignIn}>
              Sign in
            </button>

            <a href="">Forgot password?</a>

            <button>Login</button>
          </form>
        </div>
      </RightSide>
    </Container>
  );
}

import { Container, LeftSide, RightSide } from "./styles";
import dollarIcon from "../../assets/dollar-icon.svg";
import { SignIn } from "./SignIn/SignIn";
import { useState } from "react";

export function Login() {
  const [openSignModal, setopenSignModal] = useState(false);
  const handleOpenModalSignin = () => {
    setopenSignModal(true);
  };

  const [openRecoverModal, setRecoverModal] = useState(false);

  const handleOpenModalRecoverSign = () => {
    setopenSignModal(true);
  };

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
            <button type="button" onClick={handleOpenModalSignin}>
              Sign in
            </button>
            <button type="button" onClick={handleOpenModalRecoverSign}>
              Forgot Password?
            </button>
            <SignIn
              setopenSignModal={setopenSignModal}
              openSignModal={openSignModal}
            />
            <button>Login</button>
          </form>
        </div>
      </RightSide>
    </Container>
  );
}

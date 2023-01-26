import { Container, LeftSide, RightSide } from "./styles";
import dollarIcon from "../../assets/dollar-icon.svg";

import { SignIn } from "./SignIn/SignIn";
import { RecoverPassword } from "./RecoverPassword/RecoverPassword";
import { Button } from "../../components/Button";

import { useState } from "react";

export function Login() {
  const [openSignModal, setOpenSignModal] = useState(false);
  const [openRecoverModal, setOpenRecoverModal] = useState(false);

  const handleOpenModalSignin = () => {
    setOpenSignModal(true);
  };

  const handleOpenModalRecoverPassword = () => {
    setOpenRecoverModal(true);
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
            <label>Password</label>
            <input type="password" placeholder="Enter your Password" />
            <Button type="button" text="Log in" />
            <a onClick={handleOpenModalRecoverPassword} href="">
              Forgot Password?
            </a>
            <Button
              variant="smaller"
              theme="green"
              type="button"
              onClick={handleOpenModalSignin}
              text="Create new account"
            />
            <SignIn
              setOpenSignModal={setOpenSignModal}
              openSignModal={openSignModal}
            />
            <RecoverPassword
              setOpenRecoverModal={setOpenRecoverModal}
              openRecoverModal={openRecoverModal}
            />
          </form>
        </div>
      </RightSide>
    </Container>
  );
}

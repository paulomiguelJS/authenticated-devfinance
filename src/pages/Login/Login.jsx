import { Container, LeftSide, RightSide } from "./styles";
import dollarIcon from "../../assets/dollar-icon.svg";

import { SignIn } from "./SignIn/SignIn";
import { Button } from "../../components/Button";
import { RecoverPassword } from "./RecoverPassword/RecoverPassword";

import { useState } from "react";

export function Login() {
  const [openSignModal, setopenSignModal] = useState(false);
  const [openRecoverModal, setopenRecoverModal] = useState(false);

  const handleOpenModalSignin = () => {
    setopenSignModal(true);
  };

  const handleOpenModalRecoverSign = () => {
    setopenRecoverModal(true);
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

            <Button theme="blue" type="button" text="Log in" />
            <a onClick={handleOpenModalRecoverSign} href="">
              Forgot Password?"
            </a>
            <Button
              variant="smaller"
              type="button"
              onClick={handleOpenModalSignin}
              text="Create new account"
            />

            <SignIn
              setopenSignModal={setopenSignModal}
              openSignModal={openSignModal}
            />
            <RecoverPassword
              setopenRecoverModal={setopenRecoverModal}
              openRecoverModal={openRecoverModal}
            />
          </form>
        </div>
      </RightSide>
    </Container>
  );
}

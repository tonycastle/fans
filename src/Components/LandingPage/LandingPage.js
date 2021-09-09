import phoneImg from "../../images/phones.png";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import AddIcon from "@material-ui/icons/Add";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

import "./landingPage.css";

const LandingPage = () => {
  const switchForms = (form) => {
    setForm(form);
  };

  const [form, setForm] = useState("login");
  return (
    <>
      <div className="landingContainer">
        <div className="phoneCol">
          <img src={phoneImg} alt="" />;
        </div>
        <div className="formCol">
          <h2>RealFans</h2>
          <p className="signUpTagLine">
            Sign up to make money and interact with your fans!
          </p>
          <Button
            variant="text"
            className="signInTwitter"
            fullWidth
            startIcon={<TwitterIcon />}
          >
            sign in with twitter
          </Button>
          <Button
            variant="text"
            className="signInGoogle"
            fullWidth
            startIcon={<AddIcon />}
          >
            sign in with Google
          </Button>
          <p>OR</p>
          {form === "login" ? (
            <LoginForm switchForm={switchForms} />
          ) : (
            <SignUpForm switchForm={switchForms} />
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;

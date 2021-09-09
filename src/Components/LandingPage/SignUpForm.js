import { TextField, Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./landingPage.css";
import http from "../../http-common";
import { useState } from "react";
import PasswordField from "./PasswordField";
import { useHistory } from "react-router-dom";

const SignUpForm = ({ switchForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  let history = useHistory();
  //TODO: figure out what to do with errors - probabky
  //just display a message sayingincorrect credentials.
  const onSubmit = async () => {
    try {
      let payload = { username, password, email };
      const res = await http.post("/api/users/register", payload);
      history.pupsh("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <form className="loginForm" onSubmit={onSubmit}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <TextField
            type="text"
            label="Email"
            variant="outlined"
            onChange={handleEmail}
            value={email}
            fullWidth
          />
        </Grid>
        <Grid item>
          <PasswordField value={password} onchange={handlePassword} />
        </Grid>
        <Grid item>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            onChange={handleName}
            value={username}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            className="signIn"
            fullWidth
            startIcon={<AddIcon />}
            type="submit"
          >
            Sign Up
          </Button>
        </Grid>
        <Grid item>
          <p>
            By signing up you agree to our Terms of Service and Privacy Policy,
            and confirm that you are at least 18 years old.
          </p>
          <p>Already have an account?</p>
          <Button className="switchForm" onClick={() => switchForm("login")}>
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;

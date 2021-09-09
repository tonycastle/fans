import { TextField, Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./landingPage.css";
import http from "../../http-common";
import { useState } from "react";
import PasswordField from "./PasswordField";
import { useHistory } from "react-router-dom";

const LoginForm = ({ switchForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  //TODO: figure out what to do with errors - probabky
  //just display a message sayingincorrect credentials.
  const onSubmit = () => {
    try {
      http.post("/api/users/login");
      history.push("/home");
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
          <Button
            variant="text"
            className="signIn"
            fullWidth
            startIcon={<AddIcon />}
          >
            Sign in
          </Button>
        </Grid>
        <Grid item>
          <p>Don't have an account yet?</p>
          <Button className="switchForm" onClick={() => switchForm("signup")}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

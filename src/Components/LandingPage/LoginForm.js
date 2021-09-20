import { TextField, Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./landingPage.css";
import http from "../../http-common";
import { useState } from "react";
import PasswordField from "./PasswordField";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const LoginForm = ({ switchForm }) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
  });
  const [loginError, setLoginError] = useState(false);

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { email: formValues.email, password: formValues.password };
      const result = await http.post("/api/users/login", payload);
      result.data.success
        ? history.push("/profile")
        : setLoginError(result.data.message);
    } catch (error) {
      console.log(error);
      setLoginError(true); //use this to display some sorry something went wrong message
    }
  };

  const updateFormValues = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  let validationSchema = {
    email: yup.string().email().required(),
    password: yup.string().length(6).required(),
  };

  const validateFormField = (field) => (e) => {
    if (!validationSchema[field].isValidSync(e.target.value)) {
      setFormErrors({ ...formErrors, [field]: true });
    }
  };

  return (
    <form className="loginForm" onSubmit={onSubmit}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <TextField
            id="email-login"
            type="text"
            label="Email"
            variant="outlined"
            onChange={updateFormValues("email")}
            onFocus={() => setFormErrors({ ...formErrors, email: false })}
            error={formErrors.email}
            value={formValues.email}
            fullWidth
            inputProps={{ "data-testid": "email-login" }}
            helperText={
              formErrors.email ? "Please enter a valid email address" : null
            }
            onBlur={validateFormField("email")}
          />
        </Grid>
        <Grid item>
          <PasswordField
            id="password-login"
            value={formValues.password}
            onChange={updateFormValues("password")}
            onBlur={validateFormField("password")}
            onFocus={() => setFormErrors({ ...formErrors, password: false })}
            error={formErrors.password}
            inputProps={{ "data-testid": "password-login" }}
            helperText={
              formErrors.password
                ? "Password must be at least 6 characters"
                : null
            }
          />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            className="signIn"
            fullWidth
            startIcon={<AddIcon />}
            type="submit"
            data-testid="submit-login"
            disabled={
              Object.values(formErrors).includes(true) ||
              Object.values(formValues).includes("")
            }
          >
            Sign in
          </Button>
          {loginError}
        </Grid>
        <Grid item>
          <p>Don't have an account yet?</p>
          <Button
            className="switchForm"
            data-testid="link-login"
            onClick={() => switchForm("signup")}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;

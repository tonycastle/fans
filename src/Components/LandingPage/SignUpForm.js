import { TextField, Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./landingPage.css";
import axios from "axios";
import { useState } from "react";
import PasswordField from "./PasswordField";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const SignUpForm = ({ switchForm }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
    name: false,
  });
  const [registerError, setRegisterError] = useState(false);

  let history = useHistory();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        username: formValues.name,
        password: formValues.password,
        email: formValues.email,
      };
      const response = await axios.post("/api/users/register", payload);
      console.log(response.data);
      response.data.success
        ? history.push("/profile")
        : setRegisterError(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFormValues = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  let validationSchema = {
    email: yup.string().email().required(),
    password: yup.string().length(6).required(),
    name: yup.string().required(),
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
          <TextField
            id="name-login"
            type="text"
            label="Name"
            variant="outlined"
            onChange={updateFormValues("name")}
            onFocus={() => setFormErrors({ ...formErrors, name: false })}
            error={formErrors.name}
            value={formValues.name}
            fullWidth
            inputProps={{ "data-testid": "name-login" }}
            helperText={formErrors.name ? "Please enter a name" : null}
            onBlur={validateFormField("name")}
          />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            className="signIn"
            fullWidth
            startIcon={<AddIcon />}
            type="submit"
            data-testid="submit-signup"
            disabled={
              Object.values(formErrors).includes(true) ||
              Object.values(formValues).includes("")
            }
          >
            Sign Up
          </Button>
          {registerError}
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

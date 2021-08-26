import phoneImg from "../images/phones.png";
import { TextField, Button, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import AddIcon from "@material-ui/icons/Add";

import "./landingPage.css";

const LandingPage = () => {
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
          <Grid container direction={"column"} spacing={5}>
            <Grid item>
              <TextField
                type="text"
                label="Username"
                //inputProps={{ style: { fontSize: 5 } }}
                name=""
                id=""
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                label="Email"
                name=""
                id=""
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            variant="text"
            className="signIn"
            fullWidth
            startIcon={<AddIcon />}
          >
            Sign in
          </Button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

import { button, TextField, Grid } from "@material-ui/core";
import "./settings.css";

const EditAccount = () => {
  return (
    <div className>
      <h2>EDIT ACCOUNT</h2>
      <button>Save</button>
      <form action="submit">
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
          <Grid item>
            <TextField
              type="text"
              label="Phone number"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Password"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
      <h3>Linked Accounrs</h3>
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextField
            type="text"
            label="Google"
            name=""
            id=""
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            type="text"
            label="Twitter"
            name=""
            id=""
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EditAccount;

import { button, TextField, Grid } from "@material-ui/core";
import "./settings.css";

const EditProfile = () => {
  return (
    <div>
      <h2>EDIT PROFILE</h2>
      <button>Save</button>
      <form action="submit">
        <Grid container direction={"column"} spacing={5}>
          <Grid item>
            <TextField
              type="text"
              label="Username"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Display name"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Bio"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Location"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Website URL"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Amazon wishlist"
              name=""
              id=""
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditProfile;

import { Button, TextField, Grid, TextareaAutosize } from "@material-ui/core";

const ProfileForm = ({
  user,
  updateFormValues,
  submitForm,
  validateUsername,
}) => {
  return (
    <form action="submit" className="editProfileForm">
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextField
            type="text"
            label="Username"
            name=""
            value={user.username}
            onChange={updateFormValues("username")}
            onBlur={validateUsername}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            type="text"
            label="Display name"
            name=""
            onChange={updateFormValues("display_name")}
            value={user.display_name}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextareaAutosize
            type="text"
            label="Bio"
            name=""
            onChange={updateFormValues("bio")}
            value={user.bio}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            type="text"
            label="Location"
            name=""
            onChange={updateFormValues("location")}
            value={user.location}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            type="text"
            label="Website URL"
            name=""
            onChange={updateFormValues("website")}
            value={user.website}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            type="text"
            label="Amazon wishlist"
            name=""
            onChange={updateFormValues("amazon")}
            value={user.amazon}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            onClick={submitForm}
            variant="contained"
            className="submitEditButton"
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfileForm;

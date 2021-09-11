import { fetchUser } from "../../Services/profileService";
import { Button, TextField, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import "../Profile/profile.css";
import "./settings.css";
import http from "../../http-common";

const EditProfile = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState("");
  const [confirmation, setConfirmation] = useState(false); //used to show succesful update on submit

  //load the users profile
  useEffect(() => {
    fetchUser(setUser, setErrors);
  }, []);

  //update state as form is updated
  const updateFormValues = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const submitForm = async () => {
    const result = await http.post("api/users/edit", user);
    user.success ? setConfirmation(true) : console.log(result);
  };

  return (
    <div>
      <h2>EDIT PROFILE</h2>
      <div className="profileContent">
        <div className="coverPicture">
          {user.coverPicture !== "" && (
            <img
              src={`/images/${user.coverPicture}`}
              alt=""
              className="coverPic"
            />
          )}

          {user.profilePicture !== "" && (
            <img
              src={`/images/${user.profilePicture}`}
              alt=""
              className="profilePic"
            />
          )}
        </div>
      </div>
      {user && (
        <form action="submit">
          <Grid container direction={"column"} spacing={5}>
            <Grid item>
              <TextField
                type="text"
                label="Username"
                name=""
                value={user.username ?? ""}
                onChange={updateFormValues("username")}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                label="Display name"
                name=""
                onChange={updateFormValues("display_name")}
                value={user.display_name ?? ""}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                label="Bio"
                name=""
                onChange={updateFormValues("bio")}
                value={user.bio ?? ""}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                label="Location"
                name=""
                onChange={updateFormValues("location")}
                value={user.location ?? ""}
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
                value={user.website ?? ""}
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
                value={user.amazon ?? ""}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button
                onClick={submitForm}
                variant="filled"
                clasName="submitEditButton"
              >
                Save
              </Button>
            </Grid>
            {confirmation && <p>Profile succesfully updated!</p>}
          </Grid>
        </form>
      )}
    </div>
  );
};

export default EditProfile;

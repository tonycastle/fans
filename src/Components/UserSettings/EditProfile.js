import { fetchUser } from "../../Services/profileService";
import { Button, TextField, Grid, TextareaAutosize } from "@material-ui/core";
import { useEffect, useState, useRef } from "react";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import "../Profile/profile.css";
import "./settings.css";
import axios from "axios";
import { upload } from "../../Services/upload-files-service";

const EditProfile = () => {
  const [user, setUser] = useState({
    username: "",
    display_name: "",
    bio: "",
    location: "",
    website: "",
    amazon: "",
  });
  const [errors, setErrors] = useState("");
  const [confirmation, setConfirmation] = useState(false); //used to show succesful api update on submit

  //load the users profile
  useEffect(() => {
    fetchUser(setUser, setErrors, "api/users/getown");
  }, []);

  //fileinputs for image uplaods - used so we can reference the invisible file inputs from button onclicks
  const profileInputFileRef = useRef(null);
  const coverInputFileRef = useRef(null);

  const onBtnClick = (target) => {
    /*Collecting node-element and performing click*/
    target.current.click();
  };

  //update state as form is updated
  const updateFormValues = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/users/edit", user);
    console.log(result);
    result.data.success ? setConfirmation(true) : console.log(result);
  };

  const validateUsername = async (e) => {
    try {
      const result = await axios.post("/api/users/checkusername", {
        username: e.target.value,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfilePicture = (e) => {
    e.preventDefault();
    upload(e.target.files[0], "/api/posts/uploadPostFile", null, (path) => {
      setUser({ ...user, profilePicture: path });
    });
  };

  const updateCoverPicture = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    upload(e.target.files[0], "/api/posts/uploadPostFile", null, (path) => {
      setUser({ ...user, coverPicture: path });
    });
  };

  return (
    <div>
      <h2>EDIT PROFILE</h2>
      <div className="profileContent">
        <div className="editCoverPicture">
          {user.coverPicture !== "" && (
            <img
              src={`/images/${user.coverPicture}`}
              alt=""
              className="coverPic"
            />
          )}
          <AddAPhotoOutlinedIcon
            onClick={() => onBtnClick(coverInputFileRef)}
          />
          <input
            name="coverUpload"
            type="file"
            accept=".jpeg,image/jpeg,image/pjpeg,.jpg,.gif,image/gif,.png,image/png,image/x-png"
            className="fileInput"
            ref={coverInputFileRef}
            onChange={updateCoverPicture}
          ></input>
          {user.profilePicture !== "" && (
            <img
              src={`/images/${user.profilePicture}`}
              alt=""
              className="profilePic"
            />
          )}
          <AddAPhotoOutlinedIcon
            onClick={() => onBtnClick(profileInputFileRef)}
          />
          <input
            name="profileUpload"
            type="file"
            accept=".jpeg,image/jpeg,image/pjpeg,.jpg,.gif,image/gif,.png,image/png,image/x-png"
            className="fileInput"
            ref={profileInputFileRef}
            onChange={updateProfilePicture}
          ></input>
        </div>
      </div>
      {user && (
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
              {confirmation && (
                <div>
                  <p>Profile succesfully updated!</p>
                  <CancelOutlinedIcon
                    onClick={() => {
                      setConfirmation(false);
                    }}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default EditProfile;

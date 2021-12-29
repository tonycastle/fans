import { useFetchData } from "../../hooks/useFetchData";
import { useMemo, useState, useRef, useContext } from "react";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import "../Profile/profile.css";
import "./settings.css";
import axios from "axios";
import { upload } from "../../Services/upload-files-service";
import { AuthContext } from "../../contexts/auth-context";
import ProfileForm from "./ProfileForm";
import { CircularProgress } from "@material-ui/core";

const EditProfile = () => {
  const [confirmation, setConfirmation] = useState(false); //used to show succesful api update on submit

  //load the users profile
  const userId = useContext(AuthContext).User._id;
  const userOptions = useMemo(
    () => ({
      id: userId,
    }),
    [userId]
  );

  const [user, setUser, userError, userIsLoading] = useFetchData(
    "/api/users/getown",
    userOptions
  );

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
      {userIsLoading ? (
        <CircularProgress />
      ) : userError ? (
        <p>Oops! Shit is fucked up!</p>
      ) : (
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
          <ProfileForm
            user={user}
            submitForm={submitForm}
            validateUsername={validateUsername}
            updateFormValues={updateFormValues}
          />
        </div>
      )}

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
    </div>
  );
};

export default EditProfile;

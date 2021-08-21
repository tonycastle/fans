import { button, TextField } from "@material-ui/core";
import "./editProfile.css";

const EditProfile = () => {
  return (
    <div>
      <h2>EDIT PROFILE</h2>
      <button>Save</button>
      <form action="submit" className="editProfile">
        <TextField
          type="text"
          label="Username"
          name=""
          id=""
          variant="outlined"
          fullWidth
        />
        <TextField
          type="text"
          label="Display name"
          name=""
          id=""
          variant="outlined"
          fullWidth
        />
        <TextField
          type="text"
          label="Bio"
          name=""
          id=""
          variant="outlined"
          fullWidth
        />
        <TextField
          type="text"
          label="Location"
          name=""
          id=""
          variant="outlined"
          fullWidth
        />
        <TextField
          type="text"
          label="Website URL"
          name=""
          id=""
          variant="outlined"
          fullWidth
        />
        <TextField
          type="text"
          label="Amazon wishlist"
          name=""
          id=""
          variant="outlined"
          fullWidth
        />
      </form>
    </div>
  );
};

export default EditProfile;

import EditProfile from "./EditProfile";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="userSettings">
      <h2>User Settings</h2>
      <Link to="">Profile</Link>
      <Link to="">Account</Link>
      <Link to="">Privacy and safety</Link>
      <Link to="">Notifications</Link>
      <div className="SettingsContent" id="SettingsContent">
        <EditProfile />
      </div>
    </div>
  );
};

export default Settings;

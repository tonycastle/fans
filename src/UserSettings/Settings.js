import EditProfile from "./EditProfile";

const Settings = () => {
  return (
    <div>
      <h2>User Settings</h2>
      <span>Profile</span>
      <span>Account</span>
      <span>Privacy and safety</span>
      <span>Notifications</span>
      <div className="SettingsContent" id="SettingsContent">
        <EditProfile />
      </div>
    </div>
  );
};

export default Settings;

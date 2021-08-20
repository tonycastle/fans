import EditProfile from "./EditProfile";
import EditAccount from "./EditAccount";
import EditPrivacy from "./EditPrivacy";
import EditNotifications from "./EditNotifications";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Settings = () => {
  let match = useRouteMatch();
  return (
    <div className="userSettings">
      <h2>User Settings</h2>
      <Link to={`${match.url}/editprofile`}>Profile</Link>
      <Link to={`${match.url}/editaccount`}>Account</Link>
      <Link to={`${match.url}/editprivacy`}>Privacy and safety</Link>
      <Link to={`${match.url}/editnotifications`}>Notifications</Link>
      <div className="SettingsContent" id="SettingsContent">
        <Switch>
          <Route exact path={`${match.path}/`}>
            <EditProfile />
          </Route>
          <Route path={`${match.path}/editprofile`}>
            <EditProfile />
          </Route>
          <Route path={`${match.path}/editaccount`}>
            <EditAccount />
          </Route>
          <Route path={`${match.path}/editprivacy`}>
            <EditPrivacy />
          </Route>
          <Route path={`${match.path}/editnotifications`}>
            <EditNotifications />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Settings;

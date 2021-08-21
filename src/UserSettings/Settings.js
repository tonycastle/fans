import EditProfile from "./EditProfile";
import EditAccount from "./EditAccount";
import EditPrivacy from "./EditPrivacy";
import EditNotifications from "./EditNotifications";
import { MenuItem, MenuList } from "@material-ui/core";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Settings = () => {
  let match = useRouteMatch();
  return (
    <div className="userSettings">
      <h2>User Settings</h2>
      <MenuList>
        <MenuItem component={Link} to={`${match.url}/editprofile`}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to={`${match.url}/editaccount`}>
          Account
        </MenuItem>
        <MenuItem component={Link} to={`${match.url}/editprivacy`}>
          Privacy and safety
        </MenuItem>
        <MenuItem component={Link} to={`${match.url}/editnotifications`}>
          Notifications
        </MenuItem>
      </MenuList>
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

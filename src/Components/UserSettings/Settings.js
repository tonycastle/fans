import EditProfile from "./EditProfile";
import EditAccount from "./EditAccount";
import EditPrivacy from "./EditPrivacy";
import EditNotifications from "./EditNotifications";
import DisplayCards from "../Payments/Cards/DisplayCards";
import { MenuItem, MenuList } from "@material-ui/core";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./settings.css";

const Settings = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <div className="userSettings">
        <h2>User Settings</h2>
        <MenuList>
          <MenuItem component={Link} to={`${path}/editprofile`}>
            Profile
          </MenuItem>
          <MenuItem component={Link} to={`${path}/editaccount`}>
            Account
          </MenuItem>
          <MenuItem component={Link} to={`${path}/editprivacy`}>
            Privacy and safety
          </MenuItem>
          <MenuItem component={Link} to={`${path}/editnotifications`}>
            Notifications
          </MenuItem>
          <MenuItem component={Link} to={`${path}/displaycards`}>
            Payment Cards
          </MenuItem>
        </MenuList>
      </div>
      <div className="settingsContent" id="SettingsContent">
        <Switch>
          <Route exact path={`${path}/`}>
            <EditProfile />
          </Route>
          <Route path={`${path}/editprofile`}>
            <EditProfile />
          </Route>
          <Route path={`${path}/editaccount`}>
            <EditAccount />
          </Route>
          <Route path={`${path}/editprivacy`}>
            <EditPrivacy />
          </Route>
          <Route path={`${path}/editnotifications`}>
            <EditNotifications />
          </Route>
          <Route path={`${path}/displaycards`}>
            <DisplayCards />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Settings;

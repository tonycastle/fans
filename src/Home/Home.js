//this is the page basically - when you navigate to a different page it is displayed here.
import Navbar from "../Global/Navbar";
import Explore from "../Explore/Explore";
import Notifications from "../Notifications/Notifications";
import Settings from "../UserSettings/Settings";
import Messages from "../Messages/Messages";
import Bookmarks from "../Bookmarks/Bookmarks";
import Lists from "../Lists/Lists";
import Subscriptions from "../Subscriptions/Subscriptions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./Feed/Feed";

const Home = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Feed />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/messages">
              <Messages />
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route exact path="/lists">
              <Lists />
            </Route>
            <Route exact path="/subscriptions">
              <Subscriptions />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Home;

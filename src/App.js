import Navbar from "./Global/Navbar";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";
import Notifications from "./Notifications/Notifications";
import Settings from "./UserSettings/Settings";
import Messages from "./Messages/Messages";
import Bookmarks from "./Bookmarks/Bookmarks";
import Lists from "./Lists/Lists";
import Subscriptions from "./Subscriptions/Subscriptions";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
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
      </div>
    </Router>
  );
};

export default App;

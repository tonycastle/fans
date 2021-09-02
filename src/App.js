import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLayoutRoute from "./Components/HomeLayout/HomeLayoutRoutes";
import LandingPage from "./Components/LandingPage/LandingPage";
import Explore from "./Components/Explore/Explore";
import Notifications from "./Components/Notifications/Notifications";
import Settings from "./Components/UserSettings/Settings";
import Messages from "./Components/Messages/Messages";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Lists from "./Components/Lists/Lists";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Feed from "./Components/Feed/Feed";
import NewPost from "./Components/PostUpload/NewPost";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <HomeLayoutRoute path="/profile" component={Feed} />
          <HomeLayoutRoute path="/explore" component={Explore} />
          <HomeLayoutRoute path="/notifications" component={Notifications} />
          <HomeLayoutRoute path="/messages" component={Messages} />
          <HomeLayoutRoute path="/bookmarks" component={Bookmarks} />
          <HomeLayoutRoute path="/lists" component={Lists} />
          <HomeLayoutRoute path="/subscriptions" component={Subscriptions} />
          <HomeLayoutRoute path="/settings" component={Settings} />
          <HomeLayoutRoute path="/create-post" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

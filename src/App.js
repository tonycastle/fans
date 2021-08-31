import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLayoutRoute from "./HomeLayout/HomeLayoutRoutes";
import LandingPage from "./LandingPage/LandingPage";
import Explore from "./Explore/Explore";
import Notifications from "./Notifications/Notifications";
import Settings from "./UserSettings/Settings";
import Messages from "./Messages/Messages";
import Bookmarks from "./Bookmarks/Bookmarks";
import Lists from "./Lists/Lists";
import Subscriptions from "./Subscriptions/Subscriptions";
import Feed from "./Home/Feed/Feed";
import NewPost from "./Home/Feed/Post/NewPost";

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

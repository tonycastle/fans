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
import NewPost from "./Components/Posts/NewPost";
import AddCard from "./Components/Payments/AddCard/AddCard";
import DisplayCards from "./Components/Payments/Cards/DisplayCards";
import Profile from "./Components/Profile/Profile";
import "@fontsource/roboto";
import { AuthProvider } from "./auth-context";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./setAuthTokenHeader";

const App = () => {
  const [LoggedInUser, setLoginStatus] = useState({
    userId: null,
    tokenExpiration: "",
  });
  //before we render the router we need to check if there is a loginsession in storage in case the user has refreshed the page and we have lost the
  //user auth details frfom the auth conext, if so we have to renew them from the session token
  //only do this if the userId is null otherwise will do this every time and loop infiintely
  if (!LoggedInUser.userId) {
    const token = sessionStorage.getItem("authToken");
    if (token !== null) {
      setAuthToken(token);
      setLoginStatus({
        userId: jwt_decode(token).id,
        tokenExpiration: jwt_decode(token).exp,
      });
    }
  }
  //Check if token has expired - if so log user out and delete token.
  //TODO: with this system we can still have the twoken expired n the backend but the user logged in on the front end -
  //user will only be logged out if they refaresh the site, possible solution is to check expiration time in the route.
  if (LoggedInUser.userId) {
    if (Date.now() / 1000 > LoggedInUser.tokenExpiration) {
      sessionStorage.removeItem("authToken");
      setLoginStatus({
        userId: null,
        tokenExpiration: "",
      });
    }
  }
  return (
    <AuthProvider User={LoggedInUser} setLoginStatus={setLoginStatus}>
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
            <HomeLayoutRoute path="/cards" component={DisplayCards} />
            <HomeLayoutRoute path="/addcard" component={AddCard} />
            <HomeLayoutRoute path="/viewprofile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

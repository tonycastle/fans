//import { loadStripe } from "@stripe/stripe-js";
//import { Elements } from "@stripe/react-stripe-js";
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
/* const stripePromise = loadStripe(
  "pk_test_51JWsLSBhgw4Dhe1c4LAkeMkEY5Oww2PwvJ6VSsK2hv2Mv4Uz8hws4oF4fLgNYQqGYW5wkf3bifVVYPfWwD9q2s4u00BpT1znXN"
); */

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
          <HomeLayoutRoute path="/cards" component={DisplayCards} />
          <HomeLayoutRoute path="/addcard" component={AddCard} />
          <HomeLayoutRoute path="/viewprofile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

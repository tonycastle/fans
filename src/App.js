import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import LandingPage from "./LandingPage/LandingPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import Navbar from "./Global/Navbar";
import Home from "./Home/Home";
import Settings from "./UserSettings/Settings";
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

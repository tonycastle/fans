import { Route, Redirect } from "react-router-dom";

import Home from "./Home";
import { useAuth } from "../../auth-context";

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  const { loginStatus } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return loginStatus ? (
          <Home>
            <Component {...props} />
          </Home>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default HomeLayoutRoute;

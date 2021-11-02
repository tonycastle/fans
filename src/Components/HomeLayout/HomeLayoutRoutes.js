import { Route, Redirect } from "react-router-dom";

import Home from "./Home";
import { useAuth } from "../../auth-context";

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  const { User } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return User.userId ? (
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

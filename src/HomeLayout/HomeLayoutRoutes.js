import React from "react";
import { Route } from "react-router-dom";

import Home from "../Home/Home";

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Home>
          <Component {...props} />
        </Home>
      )}
    />
  );
};

export default HomeLayoutRoute;

import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import PageContainer from "./PageContainer";
import { AuthContext } from "../../contexts/auth-context";

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  const { User } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return User.userId ? (
          <PageContainer>
            <Component {...props} />
          </PageContainer>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default HomeLayoutRoute;

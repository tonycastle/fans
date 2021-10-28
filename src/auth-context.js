import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        loginStatus: auth,
        setLoginStatus: (value) => {
          setAuth(value);
        },
      }}
      {...props}
    />
  );
};

export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ loginStatus, setLoginStatus, ...rest }) => {
  return (
    <AuthContext.Provider
      value={{
        loginStatus: loginStatus,
        setLoginStatus: (value) => {
          setLoginStatus(value);
        },
      }}
      {...rest}
    />
  );
};

export const useAuth = () => useContext(AuthContext);

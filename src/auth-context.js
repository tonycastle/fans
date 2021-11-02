import { createContext, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ User, setLoginStatus, ...rest }) => {
  return (
    <AuthContext.Provider
      value={{
        User: User,
        setLoginStatus: (UserObj) => {
          setLoginStatus((prev) => ({ ...prev, ...UserObj }));
        },
      }}
      {...rest}
    />
  );
};

export const useAuth = () => useContext(AuthContext);

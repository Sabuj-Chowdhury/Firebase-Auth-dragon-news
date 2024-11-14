import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   console.log(children);

  const user = {
    name: "sabuj",
  };

  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.obj,
};

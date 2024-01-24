import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  const loginHandler = () => setIsUserAuth(true);
  const logoutHandler = () => setIsUserAuth(false);

  return (
    <AuthContext.Provider value={{ isUserAuth, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AuthProvider;

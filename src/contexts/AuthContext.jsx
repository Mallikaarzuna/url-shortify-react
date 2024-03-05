import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isUserAuth, setIsUserAuth] = useState(
    localStorage.getItem("isUserAuth") === "true"
  );
  const loginHandler = () => setIsUserAuth(true);
  const logoutHandler = () => {
    setIsUserAuth(false);
    localStorage.removeItem("token");
    const deleteCookie = async () => {
      try {
        const response = await fetch("/api/logout");
        const message = await response.text(); // Read the response as text

        if (response.ok || response.status === 302) {
          navigate("/login");
        } else {
          console.error(
            "Error in deleting cookie from backend:",
            response,
            message
          );
        }
      } catch (error) {
        console.error("Error in deleting cookie from backend:", error);
      }
    };

    deleteCookie();
  };

  useEffect(() => {
    localStorage.setItem("isUserAuth", isUserAuth);
  }, [isUserAuth]);

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

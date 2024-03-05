import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { isUserAuth } = useContext(AuthContext);

  const [user, setUser] = useState("");

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decode the token to get the payload
        const decodedToken = JSON.parse(atob(token.split(".")[1]));

        // Extract user information from the payload
        const { username, name, id } = decodedToken;

        // Set the user state
        //setUser(username || "Guest");
        setUser(username);
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  }, [isUserAuth]);

  useEffect(() => {
    if (!isUserAuth) {
      setUser("");
    }
  }, [isUserAuth]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default UserProvider;

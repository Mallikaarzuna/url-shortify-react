import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
        setUser(username);
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  }, []);
  return <UserProvider value={{ user }}>{children}</UserProvider>;
};

UserProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default UserProvider;

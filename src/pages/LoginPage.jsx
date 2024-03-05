import axios from "axios";
import Login from "../components/Login/Login"; // Import the Login component
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { loginHandler } = useContext(AuthContext);
  const handleLogin = async ({ username, password }) => {
    try {
      // Make an API call to your backend for authentication
      const response = await axios.post("/api/login", {
        username,
        password,
      });
      setErrorMessage("");

      // Assuming the backend returns a token upon successful authentication
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem("token", token);
      loginHandler();
      // Optionally, you can redirect the user to another page
      navigate("/");
    } catch (error) {
      // Handle authentication failure, display error message, etc.
      console.error("Error during login:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMsg
      ) {
        // Set the error message based on the response
        setErrorMessage(error.response.data.errorMsg);
      } else {
        // Set a generic error message for other types of errors
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* Use the Login component and pass the handleLogin function */}
      <Login onLogin={handleLogin} />
      {errorMessage && (
        <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
      )}
    </div>
  );
};

export default LoginPage;

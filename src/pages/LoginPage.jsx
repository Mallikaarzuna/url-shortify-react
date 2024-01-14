import axios from "axios";
import Login from "../components/Login/Login"; // Import the Login component
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async ({ username, password }) => {
    try {
      // Make an API call to your backend for authentication
      const response = await axios.post("/api/login", {
        username,
        password,
      });
      // Assuming the backend returns a token upon successful authentication
      const { token } = response.data;
      console.log(token);
      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Optionally, you can redirect the user to another page
      navigate("/");
    } catch (error) {
      // Handle authentication failure, display error message, etc.
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* Use the Login component and pass the handleLogin function */}
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;

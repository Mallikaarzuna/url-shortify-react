import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import PageRoutes from "./routes/PageRoutes";
import AuthProvider from "./contexts/AuthContext";
import UserProvider from "./contexts/UserContext";
import UrlProvider from "./contexts/UrlContext";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <UrlProvider>
          <PageRoutes />
        </UrlProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;

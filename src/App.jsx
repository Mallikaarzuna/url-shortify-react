import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";

import PageRoutes from "./routes/PageRoutes";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <AppHeader />
        <main>
          <PageRoutes />
        </main>
        <AppFooter />
      </div>
    </AuthProvider>
  );
}

export default App;

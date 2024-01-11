import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";

import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <PageRoutes />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

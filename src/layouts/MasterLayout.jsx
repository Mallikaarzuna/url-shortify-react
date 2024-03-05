import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";
import AppFooter from "../components/AppFooter/AppFooter";

const MasterLayout = () => {
  return (
    <div>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default MasterLayout;

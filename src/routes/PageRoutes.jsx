import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import route from "./route.json";
import Error from "../pages/Error";
import List from "../pages/List";
import SignupPage from "../pages/SignupPage";
import ShortUrlRedirect from "../pages/ShortUrlRedirect";
import MasterLayout from "../layouts/MasterLayout";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path={route.SIGNUP} element={<SignupPage />} />
        <Route path={route.LOGIN} element={<LoginPage />} />
        <Route path={route.LIST} element={<List />} />
      </Route>
      {/* Redirection route */}
      <Route path="/:shortCode" element={<ShortUrlRedirect />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default PageRoutes;

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import route from "./route.json";
import Error from "../pages/Error";
import List from "../pages/List";
import SignupPage from "../pages/SignupPage";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />} />
      <Route path={route.SIGNUP} element={<SignupPage />} />
      <Route path={route.LOGIN} element={<LoginPage />} />
      <Route path={route.LIST} element={<List />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default PageRoutes;

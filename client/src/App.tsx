import {
  BrowserRouter,
  Navigate,
  Routes,
  Outlet,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login.jsx";
import { useSelector } from "react-redux";

import "./index.css";
import Register from "./pages/register.jsx";

const PrivateRoutes = () => {
  //@ts-ignore
  const { isAuth } = useSelector((state) => state.auth);
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoute = () => {
  //@ts-ignore

  const { isAuth } = useSelector((state) => state.auth);

  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

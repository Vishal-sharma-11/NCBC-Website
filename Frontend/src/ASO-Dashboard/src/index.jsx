import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/login.jsx";
import AppRouter from "./Router.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const AsoDashboard = () => {
  return (
    <ProtectedRoute isAllowed={"ASO"}>
      <AppRouter />
    </ProtectedRoute>
  );
};

export default AsoDashboard;

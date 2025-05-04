import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./Router.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const MainFunc = () => {
  return (
    
    <ProtectedRoute isAllowed={"admin"}>
      <AppRouter />
    </ProtectedRoute>
  );
};

export default MainFunc;

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import App from "./App";
import { Dashboard, Team, Invoices, Contacts } from "./scenes";
import Login from "./scenes/login/login";
import axios from "axios";

const AppRouter = () => {
  
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

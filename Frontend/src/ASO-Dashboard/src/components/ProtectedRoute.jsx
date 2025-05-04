import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, getUserRole } from "../services/authService";
import roles from "../config/roles";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, isAllowed }) => {
  const getAuthToken = () => {
    return localStorage.getItem("token");
  };
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/user/aso/dashboard",
          {
            headers: { Authorization: `Bearer ${getAuthToken()}` },
          }
        );
        const decoded = jwtDecode(token);
        
        if (!isAllowed.includes(decoded.role)) {
          return <Navigate to="/" />;
        }
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching admin data:", error);
        navigate("/"); // Redirect to login if not authorized
      }
    };

    fetchAdminData();
  }, [navigate]);

  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

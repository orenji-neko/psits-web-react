import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthentication } from "./localStorage";

const isAuthenticated = () => {
  const authToken = getAuthentication("AuthenticationToken");
  return authToken === "Admin"; // Adjust the check based on your authentication logic
};

const PrivateRouteAdmin = ({ element: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRouteAdmin;

import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = () => {
  const { user, isAuthenticated, loading } = useContext(AuthContext);
  
  if (loading) {
    return <div>Loading...</div>; 
  }
  
  return isAuthenticated && user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
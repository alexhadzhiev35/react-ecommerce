/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

const ProtectedRoute = ({ children, reverse = false }) => {
  const { auth } = useContext(AuthContext);

  if (reverse) {
    return auth ? <Navigate to="/" replace /> : children;
  }

  return auth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

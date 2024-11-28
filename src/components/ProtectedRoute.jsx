import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isLogin } = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

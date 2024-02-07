import { Outlet, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

function ProtectedRout() {
  const { login } = useAuth();
  if (!login) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default ProtectedRout;

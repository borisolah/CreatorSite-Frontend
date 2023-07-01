// RequireAuth.js
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const RequireAuth = ({ allowedRoles }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const location = useLocation();

  const decoded = accessToken ? jwt_decode(accessToken) : undefined;
  const roles = decoded?.UserInfo?.roles || [];

  return roles.some((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

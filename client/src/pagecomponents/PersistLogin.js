import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slices/loadingSlice";
import useRefreshToken from "./hooks/useRefreshToken";
import useAuth from "./hooks/useAuth";
import useLogout from "./hooks/useLogout";
import jwt_decode from "jwt-decode";

const PersistLogin = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const refresh = useRefreshToken();
  const auth = useAuth();
  const logout = useLogout();
  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error("Error in refreshing token:", err);
        logout();
      } finally {
        isMounted && dispatch(setLoading(false));
      }
    };
    if (auth?.accessToken) {
      const decoded = jwt_decode(auth.accessToken);
      const expTime = decoded.exp * 1000;
      const isExpired = new Date().getTime() > expTime;
      if (isExpired) {
        verifyRefreshToken();
      } else {
        dispatch(setLoading(false));
      }
    } else {
      verifyRefreshToken();
    }

    return () => (isMounted = false);
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;

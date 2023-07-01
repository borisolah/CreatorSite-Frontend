import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "./hooks/useRefreshToken";
import useAuth from "./hooks/useAuth";
import useLogout from "./hooks/useLogout";
import jwt_decode from "jwt-decode";
const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
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
        isMounted && setIsLoading(false);
      }
    };

    // Verify the access token
    if (auth?.accessToken) {
      const decoded = jwt_decode(auth.accessToken);
      const expTime = decoded.exp * 1000;
      const isExpired = new Date().getTime() > expTime;

      if (isExpired) {
        verifyRefreshToken();
      } else {
        setIsLoading(false);
      }
    } else {
      verifyRefreshToken();
    }

    return () => (isMounted = false);
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;

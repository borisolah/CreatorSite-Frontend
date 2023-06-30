import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Initialize state from local storage
    const token = localStorage.getItem("authToken");
    return token ? { accessToken: token } : {};
  });

  // Listen for changes in auth state
  useEffect(() => {
    if (auth.accessToken) {
      localStorage.setItem("authToken", auth.accessToken);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

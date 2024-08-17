/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Check if there's already a logged-in user in local storage
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = (credentials) => {
    // Save the credentials to state and localStorage
    setAuth(credentials);
    localStorage.setItem("auth", JSON.stringify(credentials));
  };

  const register = (credentials) => {
    // Save the credentials to state and localStorage
    setAuth(credentials);
    localStorage.setItem("auth", JSON.stringify(credentials));
  };

  const logout = () => {
    // Remove credentials from state and localStorage
    setAuth(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

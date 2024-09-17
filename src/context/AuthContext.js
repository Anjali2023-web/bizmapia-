import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");

    // Only parse JSON if userInfo is valid and not null or undefined
    if (userInfo) {
      try {
        const parsedUserData = JSON.parse(userInfo);
        setUserData(parsedUserData);
      } catch (error) {
        console.error("Error parsing userInfo from localStorage:", error);
      }
    }

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUserData(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, setUserData, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

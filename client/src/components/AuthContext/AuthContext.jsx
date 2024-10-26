// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token')); // Get token from localStorage
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Get userId from localStorage

  const login = (token, userId) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem('token', token); // Save token to localStorage
    localStorage.setItem('userId', userId); // Save userId to localStorage
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('token'); // Remove token from localStorage
    localStorage.removeItem('userId'); // Remove userId from localStorage
  };

  const isAuthenticated = () => {
    return !!token; // Check if the token exists
  };

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;

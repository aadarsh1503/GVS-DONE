import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [localStorage.getItem('token')]); // Track token changes

  return isAuthenticated ? children : <Navigate to="/admin" replace />;
}

export default PrivateRoute;

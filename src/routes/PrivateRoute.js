import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Assuming token is stored
    return !isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
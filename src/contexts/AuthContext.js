import React, { createContext, useContext, useState } from 'react';
import AuthController from '../controllers/AuthController';
import User from '../models/User';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const result = await AuthController.login(email, password);
    if (result.success) {
      setUser(User.fromJSON(result.user));
      setIsAuthenticated(true);
    }
    return result;
  };

  const register = async (userData) => {
    const result = await AuthController.register(userData);
    if (result.success) {
      setUser(User.fromJSON(result.user));
      setIsAuthenticated(true);
    }
    return result;
  };

  const logout = () => {
    const result = AuthController.logout();
    if (result.success) {
      setUser(null);
      setIsAuthenticated(false);
    }
    return result;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}; 
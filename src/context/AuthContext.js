import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || '');

  const setTokens = (token) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
  };

  const logout=()=>{
    localStorage.removeItem('token');
    setAuthToken('');

  }

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setTokens,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

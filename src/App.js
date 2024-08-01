import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// PAGES

// AUTH COMPONENTS
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./Routes";
import './App.css'

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;

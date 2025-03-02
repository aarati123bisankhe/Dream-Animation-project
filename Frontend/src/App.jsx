import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import Home from "./components/Home page/Home"
import MovieSection from "./components/MovieSection/MovieSection";
import Aboutus from "./components/AboutUs/Aboutus";
import Navbar from "./components/Navbar/Navbar";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); 
  return token ? children : <Navigate to="/login" replace />;
};

// AppContent component to handle routing and Navbar logic
const AppContent = () => {
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/signup"];
  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {console.log("Current Path:", location.pathname)}
      {console.log("Token Exists:", !!localStorage.getItem("token"))}
      {console.log("Should Show Navbar:", shouldShowNavbar)}

      {localStorage.getItem("token") && shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/movie" element={<ProtectedRoute><MovieSection /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><Aboutus /></ProtectedRoute>} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


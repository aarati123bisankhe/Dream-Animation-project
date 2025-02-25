import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import Home from "./components/Home page/Home";
import MovieSection from "./components/MovieSection/MovieSection";
import Aboutus from "./components/AboutUs/Aboutus";
import AdminDashboard from "./components/Admin Dashboard/Admin";
import AdminLogin from "./components/AdminLogin/adminlogin";
import Navbar from "./components/Navbar/Navbar";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if token exists
  return token ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

// AppContent component to handle routing and Navbar logic
const AppContent = () => {
  const location = useLocation(); // Get the current location

  // Define the routes where the Navbar should not be shown
  const noNavbarRoutes = ["/login", "/signup", "/admin-login"];

  // Check if the current route is one where the Navbar should not be shown
  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Show Navbar only when logged in and not on login, signup, or admin-login pages */}
      {localStorage.getItem("token") && shouldShowNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/movies" element={<ProtectedRoute><MovieSection /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><Aboutus /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
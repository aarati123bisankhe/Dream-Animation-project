import React from 'react';
import './adminLogin.css'; // Ensure you import the CSS file

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      // Store token in localStorage
      localStorage.setItem("adminToken", res.data.token);

      // Redirect to dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };


    return (
        <div className="wrapper">
            <img src="\src\assets\images\login1.png" alt="Login" />
            <div className="form-wrapper login">
                <form action="">
                    <h2>Login</h2>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
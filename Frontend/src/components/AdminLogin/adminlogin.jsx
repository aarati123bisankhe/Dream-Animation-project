import React from 'react';
import './AdminLogin.css'; // Ensure you import the CSS file

const Admin = () => {
    const registerActive = () => {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.toggle('active');
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

export default Admin;
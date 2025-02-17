import React from 'react';
import './login.css'; // Ensure you import the CSS file

const Login = () => {
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
                    <div className="sign-link">
                        <p>Don't have an account? <a href="#" onClick={registerActive}>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
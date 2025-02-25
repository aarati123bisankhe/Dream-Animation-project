// import React from 'react';
// import './login.css'; // Ensure you import the CSS file

// const Login = () => {
//     const SignupActive = () => {
//         const wrapper = document.querySelector('.wrapper');
//         wrapper.classList.toggle('active');
//     };

//     return (
//         <div className="wrapper">
//             <img src="\src\assets\images\login1.png" alt="Login" />
//             <div className="form-wrapper login">
//                 <form action="">
//                     <h2>Login</h2>
//                     <div className="input-box">
//                         <input type="email" placeholder="Email" required />
//                     </div>
//                     <div className="input-box">
//                         <input type="password" placeholder="Password" required />
//                     </div>
//                     <div className="forgot-pass">
//                         <a href="#">Forgot Password?</a>
//                     </div>
//                     <button type="submit">Login</button>
//                     <div className="sign-link">
//                         <p>Don't have an account? <a href="#" onClick={SignupActive}>Sign Up</a></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        localStorage.setItem('token', data.token); // Save token
        navigate('/home'); // Redirect to Home
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <img src="/src/assets/images/login1.png" alt="Login" />
      <div className="form-wrapper login">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="sign-link">
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;

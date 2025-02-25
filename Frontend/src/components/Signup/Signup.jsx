// import React from 'react';
// import './signup.css';

// const SignUp = () => {
//   return (
//     <div className="wrapper">
//       <img src="/src/assets/images/login1.png" alt="Login" />
//       <div className="form-wrapper Sign up">
//         <form actions="">
//           <h2>Sign up</h2>
//           {/* <div className="login-container">
//             <p>Already have an account? <a href="#">
//               <strong>Log In</strong></a></p>
//           </div> */}
//         </form>
//         <div className="input-container name">
//           <label htmlFor="fname">Full Name</label>
//           <input id="fname" name="fname" type="text" />
//         </div>
//         <div className="input-container email">
//           <label htmlFor="email">Email</label>
//           <input id="email" name="Email" type="email" />
//         </div>
//         <div className="input-container password">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             name="password"
//             placeholder="Must be at least 6 characters"
//             type="password"
//           />
//           <i className="far fa-eye-slash"></i>
//         </div>
//         <div className="signup-container">
//           <p>Already have an account? <a href="#">
//             <strong>Log In</strong></a></p>
//         </div>
  
//         <button className="signup-btn" type="submit">Sign up</button>
      
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/login'); // Redirect to login page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <img src="/src/assets/images/login1.png" alt="Login" />
      <div className="form-wrapper sign-up">
        <form onSubmit={handleSignup}>
          <h2>Sign Up</h2>

          <div className="input-container name">
            <label htmlFor="fname">Full Name</label>
            <input
              id="fname"
              name="fname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-container email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Must be at least 6 characters"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="far fa-eye-slash"></i>
          </div>

          <div className="signup-container">
            <p>
              Already have an account?{' '}
              <a href="/login">
                <strong>Log In</strong>
              </a>
            </p>
          </div>

          <button className="signup-btn" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

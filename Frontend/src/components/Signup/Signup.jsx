import React from 'react';
import './signup.css';

const SignUp = () => {
  return (
    <div className="wrapper">
      <img src="/src/assets/images/login1.png" alt="Login" />
      <div className="form-wrapper Sign up">
        <form actions="">
          <h2>Sign up</h2>
          {/* <div className="login-container">
            <p>Already have an account? <a href="#">
              <strong>Log In</strong></a></p>
          </div> */}
        </form>
        <div className="input-container name">
          <label htmlFor="fname">Full Name</label>
          <input id="fname" name="fname" type="text" />
        </div>
        <div className="input-container email">
          <label htmlFor="email">Email</label>
          <input id="email" name="Email" type="email" />
        </div>
        <div className="input-container password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Must be at least 6 characters"
            type="password"
          />
          <i className="far fa-eye-slash"></i>
        </div>
        <div className="signup-container">
          <p>Already have an account? <a href="#">
            <strong>Log In</strong></a></p>
        </div>
        {/* <div className="input-container cta">
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Sign up for email updates.
          </label>
        </div> */}
        <button className="signup-btn" type="submit">Sign up</button>
        <section className="copy legal">
          <p>
            <span className="small">
              By continuing, you agree to accept our <br />
              <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
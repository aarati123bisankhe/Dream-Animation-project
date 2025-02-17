import React from "react";
// import './registration.css';
import './register.css';

const RegistrationForm = () => {

  return (
    <div className="wrapper">
      <img src="\src\assets\images\login1.png" alt="Registration" />
      <div className="form-wrapper ">
        <form action="">
          <h2>Registration</h2>
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div> 
          <div className="input-box">
            <input type="password" placeholder="password" required />
          </div>
          <button type="submit">Register</button>

          <div className="sign-link">
            <p>
              Already have an account? <a href="#"><strong>Log In</strong></a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

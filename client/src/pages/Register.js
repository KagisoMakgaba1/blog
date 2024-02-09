import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Register = () => {
  return (
    <div className="login">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button>Login</button>
        <p>You have an error!</p>
        <span>
          Already have an account? <Link to="/login" className="link">Login </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <div className="login">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder="Username" />
            <input required type="password" placeholder="Password" />
            <button>Login</button>
            <p>You have an error!</p>
            <span>Don't have an account? <Link to="/register" className="link">Register </Link></span>
        </form>
    </div>
  );
};

export default Login;

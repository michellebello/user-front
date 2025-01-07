import React from "react";
// import axios from "axios";

function Login() {
  return (
    <div>
      <h1>Welcome back!</h1>
      <div>
        <label for="username">Username</label>
        <input type="text"></input>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text"></input>
      </div>
      <button>Log in</button>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8080/users/login?username=${username}&password=${password}`
      );
      console.log("Login successful:", res.data);
      navigate("/");
    } catch (err) {
      console.log("Login failed", err);
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Welcome back!</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;

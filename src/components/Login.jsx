import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import eye from "./eye.png";
import "./styles/index.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const toggleVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8080/users/login?username=${username}&password=${password}`
      );
      if (res.data === "Login successful!") {
        toast.success("Login successfully!");
        navigate("/success");
      } else {
        toast.error("Incorrect username or password!");
      }
    } catch (err) {
      console.log("Login failed", err);
      toast.error("An error occurred, try again.");
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
          type={passwordVisibility ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*************"
        ></input>
        <img
          className="eye"
          src={eye}
          alt="eye"
          onClick={toggleVisibility}
        ></img>
      </div>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;

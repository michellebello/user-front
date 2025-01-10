import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      email: email,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/users/register",
        newUser,
        {
          headers: {
            ContentType: "application/json",
          },
        }
      );
      navigate("/login");
    } catch (err) {
      console.error("Error registering new user ", err);
    }
  };

  return (
    <div>
      <h1>New user</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <button onClick={handleRegister} type="submit">
        Register
      </button>
    </div>
  );
}

export default Register;

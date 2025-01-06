import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      email: email,
    };

    try {
      const res = await axios.post("http://localhost:8080/users", newUser, {
        headers: {
          ContentType: "application/json",
        },
      });
      console.log(JSON.stringify(res.data));
      setSuccess(true);
      setError(null);
    } catch (err) {
      console.error("Error registering new user ", error);
      setError(err.response?.data || "Something went wrong");
      setSuccess(null);
    }
  };

  return (
    <div>
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <button onClick={handleRegister} type="submit">
        Register
      </button>
      {success && <div style={{ color: "green" }}>{success}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default Register;

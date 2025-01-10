import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eye from "./eye.png";
import "./styles/index.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const toggleVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

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
      if (res.data === "User has been successfully added") {
        toast.success("Registered successfully, now you can login");
        navigate("/login");
      } else {
        toast.error("Make sure all forms are filled, and try again");
      }
    } catch (err) {
      console.error("Error registering new user ", err);
      toast.error("Error occurred, try again.");
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
          type={passwordVisibility ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*************"
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
        <img
          className="eye"
          src={eye}
          alt="eye"
          onClick={toggleVisibility}
        ></img>
      </div>
      <button onClick={handleRegister} type="submit">
        Register
      </button>
    </div>
  );
}

export default Register;

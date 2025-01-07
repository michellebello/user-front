import React from "react";
import { NavLink } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <NavLink to="/register">Register here</NavLink>
      <NavLink to="/login">Log in here</NavLink>
    </div>
  );
}

export default MainPage;

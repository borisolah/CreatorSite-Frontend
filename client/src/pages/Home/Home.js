import "./home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="signup">Signup</NavLink>
    </div>
  );
}

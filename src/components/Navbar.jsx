import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

    </nav>
  );
}

export default Navbar;
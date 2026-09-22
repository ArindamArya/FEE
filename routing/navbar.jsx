import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h2>My Website</h2>

      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "Close" : "Menu"}
      </button>

      {menuOpen && (
        <div>
          <NavLink to="/" onClick={()=>setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={()=>setMenuOpen(false)}>
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
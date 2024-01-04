import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/Services">SERVICES</Link>
        </li>
        <li>
          <Link to="/About us">ABOUT US</Link>
        </li>
        <li>
          <Link to="/Contact us">CONTACT US</Link>
        </li>
        <li>
          <Link to="/Careers">CAREERS</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

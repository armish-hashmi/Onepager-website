import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./img/logo.png";

const NAV_ITEMS = [
  { path: "/", label: "HOME" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/services", label: "SERVICES" },
  { path: "/team", label: "TEAM" },
  { path: "/about", label: "ABOUT" },
  { path: "/blog", label: "BLOG" },
  { path: "/contact", label: "CONTACT US" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? "mobile-open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

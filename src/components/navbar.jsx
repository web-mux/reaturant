import React, { useState } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="nav-bar">
        <div className="logo">
          <p>D</p>
          <div className="text">
            <span className="first">Delizi</span>
            <span className="second">oso</span>
          </div>
        </div>

        <div className="links desktop">
          <a href="/login">Home</a>
          <a href="/auth">Menu</a>
          <a href="/forgot-password">About us</a>
          <a href="#">Order online</a>
          <a href="#">Reservation</a>
          <a href="#">Contact us</a>
        </div>

        <div className="btns desktop">
          <a href="login">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <button className="login" onClick={() => navigate("/login")}>
            Login
          </button>
        
        </div>

        <div
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <a href="/login">Home</a>
        <a href="/auth">Menu</a>
        <a href="#">About us</a>
        <a href="#">Order online</a>
        <a href="#">Reservation</a>
        <a href="#">Contact us</a>

        <div className="mobile-actions">
          <a href="#">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <button className="login" onClick={() => navigate("/login")}>
            Login
          </button> 
        </div>
      </div>
    </header>
  );
}

export default Navbar;

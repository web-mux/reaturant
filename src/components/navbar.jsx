import React, { useState } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


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
<Link to="/login">Home</Link>
<Link to="/auth">Menu</Link>
<Link to="/forgot-password">About us</Link>
<Link to="#">Order online</Link>
<Link to="#">Reservation</Link>
<Link to="#">Contact us</Link>
        </div>

  <div className="btns desktop">
  <Link to="/login">
    <i className="fa-solid fa-cart-shopping"></i>
  </Link>

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
<Link to="/login">Home</Link>
<Link to="/auth">Menu</Link>
<Link to="#">About us</Link>
<Link to="#">Order online</Link>
<Link to="#">Reservation</Link>
<Link to="#">Contact us</Link>


   <div className="mobile-actions">
  <Link to="#">
    <i className="fa-solid fa-cart-shopping"></i>
  </Link>

  <button className="login" onClick={() => navigate("/login")}>
    Login
  </button>
</div>

      </div>
    </header>
  );
}

export default Navbar;

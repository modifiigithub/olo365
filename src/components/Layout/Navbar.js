import React, { useState, useRef } from "react";
import { CgMenuHotdog } from "react-icons/cg";
import { Link } from "react-router-dom";
import ToggleButton from "../Theme/ToggleButton";
import Logo from "../assets/svg/Logo.svg";
import "./Navbar.css";
import Cart from "../Cart/Cart";

const Navbar = ({ onToggle, isDarkMode }) => {
  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav">
            <Link to='/' className="logo">
              <img src={Logo} alt="Logo" />
            </Link>
            <ul
              className={`nav_menu ${isActive ? "active" : ""}`}
              ref={menuRef}
            >
              <li className="nav_list">
                <Link to="/" className="nav_link">
                  Online Ordering
                </Link>
              </li>
            </ul>
            <ul className="button_menu_area">
              <Cart/>
              <ToggleButton onClick={onToggle} isDarkMode={isDarkMode} />
              <Link to="/auth"><button className="btn">Log In</button></Link>
              <button className="toggle_btn" onClick={toggleClass}>
                <CgMenuHotdog className="icons" />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
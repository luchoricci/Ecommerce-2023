import React from "react";
import "./styles.css";

const Header = ({ logo }) => {
  return (
    <header className="headerContainer">
      <a href="/" className="logo">
        {logo}
      </a>
      <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor ="side-menu">
                <span className="hamb-line"></span>
            </label>
      <nav className="nav">
        <ul className="menu">
          <li>
            <button >Home</button>
          </li>
          <li>
            <button>Store</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Contact Us</button>
          </li>
          <li>
            <button>Cart</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

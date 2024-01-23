import React from "react";
import "./styles.css";
import { CartContext } from "../../context/cart-Context";
import { useContext } from "react";
import { useNavigate, NavLink} from "react-router-dom";

const Header = ({ logo }) => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  }

  return (
    <header className="headerContainer">
      <NavLink to="/ " className="logo">
        {logo}
      </NavLink>
      <input type="checkbox" className="side-menu" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <li>
            <button>Home</button>
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
          <li onClick={goToCart} className="menuCartContainer">
            <img
              className="menuCartImage"
              src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
              alt="Cart"
            />
            <div className="menuCartCountContainer">
              <span className="menuCartCount">{cart.length}</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

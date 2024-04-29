import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
        <p>Tennispot</p>
      </div>
      <ul className="navbar__menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Homme</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Femmes</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Enfants</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="navbar__login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="icone panier" />
          <div className="nav-cart-count">0</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

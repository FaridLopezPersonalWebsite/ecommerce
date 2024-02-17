import React, { useContext, useRef } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems, loggedIn, logout } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Forrest</p>
      </div>
      <img onClick={dropdown_toggle} className="nav-dropdown" src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to='/mens'>
            Shop
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        {loggedIn ? (
          <>
            <Link to='/cart'>
              <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button>Login</button>
            </Link>
            <Link to='/cart'>
              <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;




import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/gv-logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const [menu, setMenu] = useState("home");

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token"); // if you're storing it
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
      </div>
      <ul className='nav-menue'>
        <li onClick={() => setMenu("home")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>{menu === "home" ? <hr /> : null}</li>
        <li onClick={() => setMenu("products")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/products'>Products</Link>{menu === "products" ? <hr /> : null}</li>
        <li onClick={() => setMenu("blogs")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/blogs'>Blogs</Link>{menu === "blogs" ? <hr /> : null}</li>
        <li onClick={() => setMenu("contact")}><Link style={{ textDecoration: 'none', color: 'white' }} to='/contacts'>Contact</Link>{menu === "contact" ? <hr /> : null}</li>
      </ul>

      <div className='nav-login-cart'>
        {!user ? (
          <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
        ) : (
          <>
            <span style={{ color: 'white', marginRight: '10px' }}>Hi, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
        <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt='' /></Link>
      </div>
    </div>
  );
};

export default Navbar;

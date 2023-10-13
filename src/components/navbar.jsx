import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menus">
        <h2>M8 Engine Blogs</h2>

        <ul>
          <Link to="/" className="text">
            Home
          </Link>

          <Link to="/blogpost" className="text">
            Blog Posts
          </Link>

          <Link to="/About" className="text">
            About
          </Link>

          <Link to="/contact" className="text">
            Contact
          </Link>
        </ul>
        <Link to="/signin">
          <button class="dash_signin">SIGN IN</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

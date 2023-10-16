import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="menus">
        <Link to="/">
          {" "}
          <h2>M<span class="logo">eight</span> Blogs</h2>
        </Link>

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

import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <IconContext.Provider value={{ color: "white", size: "2em" }}>
      <>
        <div className="menus">
          <Link to="/">
            {" "}
            <h2>
              M<span class="logo">eight</span> Blogs
            </h2>
          </Link>
          <ul className={menuOpen ? "open" : ""}>
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

          <div
            className="MobileMenu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <FaBars />
          </div>
        </div>
      </>
    </IconContext.Provider>
  );
};

export default Navbar;

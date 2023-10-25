import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GatewayModel } from "./GatewayModel";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [GatewayModelopen, setGatewayModelopen] = useState(false);

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

            <Link to="/About" className="text">
              About
            </Link>

            <Link to="/contact" className="text">
              Contact
            </Link>
            <button
              className="dash_signin"
              onClick={() => setGatewayModelopen(true)}
            >
              SIGN IN
            </button>
          </ul>

          <div
            className="MobileMenu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <FaBars />
          </div>
        </div>

        <div className="model">
          {GatewayModelopen && (
            <GatewayModel closeGatewayModel={setGatewayModelopen} />
          )}
        </div>
      </>
    </IconContext.Provider>
  );
};

export default Navbar;

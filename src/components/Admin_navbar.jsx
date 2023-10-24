import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GatewayModel } from "./GatewayModel";

const Admin_navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //const [GatewayModelopen, setGatewayModelopen] = useState(false);

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
            <Link to="/Sys_blog" className="text">
              Home
            </Link>

            <Link to="/Add_blog" className="text">
              Add Blog
            </Link>

            <Link to="/About" className="text">
              About
            </Link>

            <button
              className="dash_signin"
              onClick={() => {
                window.location = "/";
                sessionStorage.clear();
                alert("You are logged out in the system");
              }}
            >
              Logout
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

        {/* <div className="model">
          {GatewayModelopen && (
            <GatewayModel closeGatewayModel={setGatewayModelopen} />
          )}
        </div> */}
      </>
    </IconContext.Provider>
  );
};

export default Admin_navbar;

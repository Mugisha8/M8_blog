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
          <Link to="/Sys_blog">
            {" "}
            <h2>
              M<span class="logo">eight</span> Blogs
            </h2>
          </Link>
          <ul className={menuOpen ? "open" : ""}>
            <button
              className="dash_signin"
              onClick={() => {
                localStorage.removeItem("token");
                window.location = "/";
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

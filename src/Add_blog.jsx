import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

const Add_blog = () => {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>

      <section id="content_blog">
        <div className="wrapper_container">
          <h2>
            M<span>eight</span> Blogs
          </h2>
          <form method="POST" className="addblog">
            <b>
              <label>Title</label>
            </b>
            <input
              type="Text"
              className="addblog_text"
              placeholder="blog title..."
            />
            <b>
              <label>Description</label>
            </b>
            <textarea
              className="addblog_desc"
              placeholder="blog Description..."
            ></textarea>
            <input type="file" />
            <button className="publish">Publish</button>
            <button className="cancel">Cancel</button>
            <button className="clear">Clear</button>
            <Link to="/Sys_blog "><span>{"View Your publsihed blogs >>>"}</span></Link>
          </form>
        </div>
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Add_blog;

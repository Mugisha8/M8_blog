import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

const Add_blog = () => {
  const [blogTitle, setblogTitle] = useState("");
  const [blogContent, setblogContent] = useState("");
  const [blog_Image, setblog_Image] = useState("");

  const BlogData = {
    blogTitle,
    blogContent,
    blog_Image,
  };

  const [imgfile, uploading] = useState("");

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploading(URL.createObjectURL(e.target.files[0]));
    }
    setblog_Image(e.target.value);
  };

  const handleblog = async (data) => {
    try {
      const response = await fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/klab/blog/createBlog",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        alert("Blog is Posted");
      } else {
        console.log("failed to add blog");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
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
          <form className="addblog">
            <b>
              <label>Title</label>
            </b>
            <input
              type="Text"
              className="addblog_text"
              placeholder="blog title..."
              value={blogTitle}
              onChange={(e) => setblogTitle(e.target.value)}
            />
            <b>
              <label>Description</label>
            </b>
            <textarea
              className="addblog_desc"
              placeholder="blog Description..."
              value={blogContent}
              onChange={(e) => setblogContent(e.target.value)}
            ></textarea>
            <input type="file" value={blog_Image} onChange={imgFilehandler} />
            <div className="preview">
              <img
                src={imgfile}
                alt="BLOG IMAGE PREVIEW"
                width="400px"
                height="300px"
              />
            </div>
            <button className="cancel">Cancel</button>
            <button
              className="publish"
              onClick={(e) => {
                e.preventDefault();
                handleblog(BlogData);
              }}
            >
              Publish
            </button>

            <button className="clear">Clear</button>
            <Link to="/Sys_blog ">
              <span>{"View Your publsihed blogs >>>"}</span>
            </Link>
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

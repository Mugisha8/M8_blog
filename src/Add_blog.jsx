import React, { useState } from "react";
import Admin_navbar from "./components/Admin_navbar";
import Footer from "./components/footer";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add_blog = () => {
  const navigate = useNavigate();

  const [blogTitle, setblogTitle] = useState("");
  const [blogContent, setblogContent] = useState("");
  const [blog_Image, setblog_Image] = useState("");

  // const BlogData = {
  //   blogTitle,
  //   blogContent,
  //   blog_Image,
  // };

  // const [imgfile, uploading] = useState("");

  // const imgFilehandler = (e) => {
  //   if (e.target.files.length !== 0) {
  //     uploading(URL.createObjectURL(e.target.files[0]));
  //   }
  //   setblog_Image(e.target.value);
  // };

  const token = localStorage.getItem("token");
  console.log("Token =", token);

  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleblog = async (e) => {
    e.preventDefault();

    const imageInput = document.getElementById("imageInput");
    const blog_Image = imageInput.files[0];

    const BlogData = new FormData();
    BlogData.append("blogTitle", blogTitle);
    BlogData.append("blogContent", blogContent);
    BlogData.append("blog_Image", blog_Image);

    try {
      const make = await axios.post(
        "https://zigirumugabe-pacifique.onrender.com/api/klab/blog/createBlog",
        BlogData,
        configuration
      );

      console.log(make);
      if (make.status === 200) {
        alert("blog created successfuly");
        navigate("/Sys_blog");
      }
    } catch (error) {
      console.log(error);
      alert("failed to post a blog");
    }
  };

  return (
    <>
      <section id="navbar">
        <Admin_navbar />
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
            <input
              type="file"
              value={blog_Image}
              id="imageInput"
              accept="image/*"
              onChange={(e) => setblog_Image(e.target.value)}
            />
            {/* <div className="preview">
              <img
                src={imgfile}
                alt="BLOG IMAGE PREVIEW"
                width="400px"
                height="300px"
              />
            </div> */}
            <button className="cancel">Cancel</button>
            <button className="publish" onClick={handleblog}>
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

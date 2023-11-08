import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CoverImage from "./components/CoverImage";
import { Link } from "react-router-dom";
import Comment from "./components/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Blogpost() {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [relatedblogs, setrelatedblogs] = useState([]);
  const [postcomment, setpostcomment] = useState("");
  console.log("postcomment", postcomment);

  const displayAll = async () => {
    const response = await fetch(
      `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewBlogById/${_id}`
    );
    const res = await response.json();
    setBlogData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    displayAll();
  }, [_id]);
  console.log("POSTS", blogData);
  let comment_view = blogData.comment;

  console.log("comment_view: ", comment_view);

  useEffect(() => {
    const Relatedpost = async () => {
      await fetch(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewAllBlogs`
      )
        .then((response) => response.json())
        .then((res) => {
          setrelatedblogs(res.data);
        });
    };
    Relatedpost();
  }, []);

  {
    /*---------- comment api section start --------- */
  }

  const postdata = {
    message: postcomment,
  };

  const handleCommentPost = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    // console.log("token", token);

    if (!token) {
      toast.warn("First Login to post your comment", {
        position: "top-center",
      });
    }

    try {
      const response = await axios.post(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/comment/${_id}`,
        postdata,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("postdata", postdata);

      if (response.status === 201) {
        toast.success("comment Posted");
        console.log(response.data);
        setpostcomment("");
        displayAll();
      } else {
        toast.error("comment post failed");
        console.log(response.data);
      }
    } catch (error) {
      console.log("error", error);
      toast.error("an error occured while posting");
    }
  };

  {
    /*---------- comment api section end --------- */
  }
  return (
    <>
      <section id="blog_navbar">
        <Navbar />
      </section>

      <section id="blog_content">
        <div className="coverblog">
          <img src={blogData.blog_Image} className="cover-image-blog" alt="" />
        </div>
        <div className="blog_desc">
          <h2>{blogData.blogTitle}</h2>
          <p>{blogData.blogContent}</p>
        </div>

        <h3> Related Posts</h3>

        <div className="related_post">
          {relatedblogs.slice(0, 4).map((related, index) => (
            <Link to={`/blog/${related._id}`} key={index}>
              <CoverImage
                key={index}
                id={related._id}
                image={related.blog_Image}
                title={related.blogTitle}
              />
            </Link>
          ))}
        </div>

        <div className="load">
          <Link to="/">
            {" "}
            <button className="more">{" More>>> "}</button>
          </Link>
        </div>

        {/*---------- comment DOM section start --------- */}

        <div className="comment_heading">
          <span className="pop"></span>
          {comment_view && comment_view.length} <h4>Comments </h4>
        </div>
        <hr />
        <br />

        <div className="comments">
          {comment_view &&
            comment_view.map((comment_element, index) => (
              <section id="comments" key={index}>
                <img src={comment_element.userPhoto} className="profile_img" />
                <b>
                  <span className="username">{comment_element.username}</span>
                </b>
                <p>{comment_element.message}</p>
              </section>
            ))}
        </div>

        <div className="reply_heading">
          <h3>Leave a Reply </h3>
        </div>

        <div className="reply_post">
          <form className="comment_form">
            <textarea
              placeholder="Leave your Comment"
              name="comment"
              className="comment_text"
              value={postcomment}
              onChange={(e) => setpostcomment(e.target.value)}
            ></textarea>
            <button className="post_comment" onClick={handleCommentPost}>
              POST COMMENT
            </button>
          </form>
        </div>
      </section>

      {/*---------- comment DOM section end --------- */}

      <section id="footer">
        <Footer />
      </section>
      <ToastContainer />
    </>
  );
}

export default Blogpost;

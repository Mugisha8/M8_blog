import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CoverImage from "./components/CoverImage";
import { Link } from "react-router-dom";
import Comment from "./components/Comment";
import { useParams } from "react-router-dom";

function Blogpost() {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [relatedblogs, setrelatedblogs] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await fetch(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewBlogById/${_id}`
      );
      const res = await response.json();
      setBlogData(res.data);
      console.log(res.data);
    };

    getAll();
  }, [_id]);
  console.log("POSTS", blogData);

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

  const Comment_post = [
    {
      profile:
        "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      username: "Yves MUGISHA",
      comment:
        "We celebrate the awe-inspiring beauty of the naturalworld, from breathtaking landscapes to the smallest wonders of floraand fauna",
      date: "22/02/2023",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      username: "Keylah ISIMBI",
      comment:
        "We celebrate the awe-inspiring beauty of the naturalworld, from breathtaking landscapes to the smallest wonders of floraand fauna",
      date: "12/06/2023",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      username: "Jayden ISHIMWE",
      comment:
        "We celebrate the awe-inspiring beauty of the naturalworld, from breathtaking landscapes to the smallest wonders of floraand fauna",
      date: "02/12/2023",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      username: "Darren MUGABO",
      comment:
        "We celebrate the awe-inspiring beauty of the naturalworld, from breathtaking landscapes to the smallest wonders of floraand fauna",
      date: "22/02/2023",
    },
  ];

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

        <div className="comment_heading">
          <h4>Comments </h4>
          <hr />
        </div>

        <div className="comments">
          {Comment_post.map((comment_element, index) => (
            <Comment
              key={index}
              profile={comment_element.profile}
              username={comment_element.username}
              comment_desc={comment_element.comment}
              date={comment_element.date}
            />
          ))}
        </div>

        <div className="reply_heading">
          <h3>Leave a Reply </h3>
        </div>

        <div className="reply_post">
          <form method="POST" className="comment_form">
            <textarea
              placeholder="Leave your Comment"
              name="comment"
              className="comment_text"
            ></textarea>
            <button className="post_comment">POST COMMENT</button>
          </form>
        </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Blogpost;

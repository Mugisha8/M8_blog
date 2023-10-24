import React,{useState,useEffect} from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CoverImage from "./components/CoverImage";
import { Link } from "react-router-dom";
import Comment from "./components/Comment";
import { useParams } from "react-router-dom";

function Blogpost() {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});

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
  }, []);
  console.log("POSTS", blogData);

  if (!blogData) {
    return <div>Loading..</div>;
  }

  const Blog_post = [
    {
      post: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      Title: "Throwback to the Good Old Days",
    },
    {
      post: "https://images.unsplash.com/photo-1696172686863-f47aac202464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      Title: "Throwback to the Good Old Days",
    },
    {
      post: "https://images.unsplash.com/photo-1696254981060-e4c03b07a9a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      Title: "Throwback to the Good Old Days",
    },
    {
      post: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      Title: "Throwback to the Good Old Days",
    },
  ];

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
        <div class="related_post">
          {Blog_post.map((related, index) => (
            <CoverImage
              key={index}
              image={related.post}
              title={related.Title}
            />
          ))}
        </div>

        <div class="load">
          <Link to="/">
            {" "}
            <button className="more">{" More>>> "}</button>
          </Link>
        </div>

        <div className="comment_heading">
          <h4>Comments </h4>
          <hr />
        </div>

        <div class="comments">
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
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="comment_text"
            />
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

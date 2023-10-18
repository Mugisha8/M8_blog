import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CoverImage from "./components/CoverImage";
import { Link } from "react-router-dom";
import Comment from "./components/Comment";

function Blogpost() {
  const Blog_cover = [
    {
      photo:
        "https://plus.unsplash.com/premium_photo-1675690280450-a544f470d42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const Blog_post = [
    {
      post: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      Title: "Throwback to the Good Old Days",
    },
    {
      post:"https://images.unsplash.com/photo-1696172686863-f47aac202464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
          {Blog_cover.map((blogg, index) => (
            <CoverImage key={index} image={blogg.photo} />
          ))}
        </div>
        <div className="blog_desc">
          <h2>Embracing the Wild: Celebrating the Beauty of Nature</h2>
          <p>
            "Embracing the Wild: Step into the heart of nature with our blog,
            where the wonders of the great outdoors come to life. Journey with
            us through lush forests, across rolling meadows, and along serene
            riversides. We celebrate the awe-inspiring beauty of the natural
            world, from breathtaking landscapes to the smallest wonders of flora
            and fauna. Join our community of nature enthusiasts, eco-advocates,
            and adventure seekers as we explore the intricate ecosystems,
            conservation efforts, and the profound serenity that nature offers.
            Through vivid storytelling, breathtaking photography, and insightful
            articles, we invite you to reconnect with the Earth, learn about its
            intricate ecosystems, and find inspiration in the untouched marvels
            of our planet. Let's embark on a journey where the rustle of leaves
            and the song of birds remind us of the profound magic that lies just
            beyond our doorstep.
          </p>
          <br />
          <p>
            Join our community of nature enthusiasts, eco-advocates, and
            adventure seekers as we explore the intricate ecosystems,
            conservation efforts, and the profound serenity that nature offers.
            Through vivid storytelling, breathtaking photography, and insightful
            articles, we invite you to reconnect with the Earth, learn about its
            intricate ecosystems, and find inspiration in the untouched marvels
            of our planet. Let's embark on a journey where the rustle of leaves
            and the song of birds remind us of the profound magic that lies just
            beyond our doorstep."
          </p>
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
            <input type="text" name="name" placeholder="Name" className="comment_text"/>
            <textarea placeholder="Leave your Comment" name="comment"className="comment_text"></textarea>
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

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Card_blogs from "./components/Card_blogs";
import Footer from "./components/footer";

function Dashboard({}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewAllBlogs"
      )
        .then((response) => response.json())
        .then((res) => {
          setPosts(res.data);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="content">
        <div className="dash_container">
          <div class="hero">
            <h2>Welcome to Meight Blogs</h2>
            <p>
              We are thrilled to have you join our vibrant community on our
              <b> Meight blog platform</b>, and we extend our warmest welcome to
              you. Your presence is a valuable addition to our growing family of
              writers, readers, and enthusiasts who share a passion for engaging
              content and thoughtful discussions. Our community is diverse and
              supportive, and we encourage you to explore, engage, and connect
              with fellow bloggers who share your interests.
            </p>
          </div>

          <div className="blog_grid">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <Card_blogs
                  key={index}
                  id={post._id}
                  title={post.blogTitle}
                  Description={post.blogContent}
                  image={post.blog_Image}
                  views={post.views}
                  PostedOn={post.PostedOn}
                />
              ))
            ) : (
              <p>
                <iframe
                  src="https://giphy.com/embed/swhRkVYLJDrCE"
                  width="380"
                  height="300"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <center>
                    <a href="https://giphy.com/gifs/google-icon-loading-swhRkVYLJDrCE">
                      via GIPHY
                    </a>
                  </center>
                </p>
              </p>
            )}
          </div>
        </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Dashboard;

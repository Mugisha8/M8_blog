import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Card_blogs from "./components/Card_blogs";
import Footer from "./components/footer";

function Dashboard({}) {
  // const Blogs = [
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696961672016-7d545878292c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.  ",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1695071319752-371dcee7bb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "The Art Of Visual Story telling",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.",
  //   },
  //   {
  //     photo:
  //       "https://plus.unsplash.com/premium_photo-1675690280450-a544f470d42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

  //     title: "Celebrating the Beauty of Nature",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.  ",
  //   },
  //   {
  //     photo:
  //       "https://plus.unsplash.com/premium_photo-1680806491014-1cade48c8fd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "What Your Music Preference Says AboutYou",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.  ",
  //   },
  //   {
  //     photo:
  //       "https://plus.unsplash.com/premium_photo-1695758787352-90c6ad0cb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Just a Standard Format Post. ",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. ",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696920861875-35e708b89f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "No Sugar Oatmeal Cookies.",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.  ",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1693924198149-e14ff98ed3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.  ",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696789990406-ae38ef0848d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.  ",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery.  ",
  //   },
  // ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewAllBlogs"
      )
        .then((response) => response.json())
        .then((res) => {
          setPosts(res);
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

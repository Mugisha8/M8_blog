import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Admin_navbar from "./components/Admin_navbar";
import Card_blogs from "./components/Card_blogs";
import Footer from "./components/footer";
import { Link, json } from "react-router-dom";
import { FiSettings } from "react-icons/Fi";
import { MdAddToPhotos } from "react-icons/Md";
import Admin_card_blog from "./components/admin_card_blog";

function Sysblog() {
  // const Blogs = [
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696961672016-7d545878292c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1695071319752-371dcee7bb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "The Art Of Visual Story telling",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Create Meaningful Family Moments.",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://plus.unsplash.com/premium_photo-1680806491014-1cade48c8fd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "What Your Music Preference Says AboutYou",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://plus.unsplash.com/premium_photo-1695758787352-90c6ad0cb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Just a Standard Format Post. ",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696920861875-35e708b89f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "No Sugar Oatmeal Cookies.",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1693924198149-e14ff98ed3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696789990406-ae38ef0848d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  //   {
  //     photo:
  //       "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     title: "Throwback to the Good Old Days",
  //     Description:
  //       "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
  //     Edit: "Edit",
  //     Delete: "Delete",
  //   },
  // ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewAllBlogs"
      )
        .then((response) => response.json())
        .then((res) => {
          setPosts(res);
        });
    };
    fetchData();
  });

  return (
    <>
      <section id="navbar">
        <Admin_navbar />
      </section>
      <section id="content">
        <div class="admin_hero">
          <div className="dashboard_title">
            {" "}
            <h2>
              <FiSettings />
              Dashboard
            </h2>
            <Link to="/Add_blog">
              <div className="add_post">
                <button>
                  <MdAddToPhotos />
                  Add New POST
                </button>
              </div>
            </Link>
          </div>

          <div className="dashboard_buttons">
            <div className="add_post">
              <button>
                All Blogs
                {posts && <span class="pop">{posts.length}</span>}
              </button>
            </div>

            <div className="add_post">
              <button>
                Blog Users
                <span class="pop">7</span>
              </button>
            </div>

            <div className="add_post">
              <button>
                Comments
                <span class="pop">10</span>
              </button>
            </div>
          </div>
        </div>

        <div className="admin_dash_container">
          <div className="admin_blog_grid">
            {posts.length > 0 ? (
              posts.map((blogs, index) => (
                <Admin_card_blog
                  key={index}
                  id={blogs._id}
                  title={blogs.blogTitle}
                  Description={blogs.blogContent}
                  image={blogs.blog_Image}
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

export default Sysblog;

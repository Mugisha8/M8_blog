import React, { useState, useEffect } from "react";

import Admin_navbar from "./components/Admin_navbar";

import Footer from "./components/footer";

import { FiMoreVertical, FiSettings } from "react-icons/Fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdAddToPhotos, MdArrowDropDown } from "react-icons/md";
import Admin_card_blog from "./components/admin_card_blog";
import Add_blog from "./Add_blog";

function Sysblog() {
  const [addblog, setaddblog] = useState(false);

  const [posts, setPosts] = useState([]);

  const [mobilePop, setmobilePop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewAllBlogs"
      )
        .then((response) => response.json())
        .then((res) => {
          setPosts(res.data);
        });
    };
    fetchData();
  });

  return (
    <>
      <section id="navbar">
        <Admin_navbar />
        {addblog && <Add_blog closeblog={setaddblog} />}
      </section>
      <section id="content">
        <div class="admin_hero">
          <div className="dashboard_title">
            {" "}
            <h2>
              <FiSettings />
              Dashboard
            </h2>
            <div className="add_post">
              <button onClick={() => setaddblog(true)}>
                <MdAddToPhotos />
                Add New POST
              </button>
            </div>
          </div>
          <div className="mobile_pop_display">
            <span
              className="mobile_poptext_display"
              onClick={() => setmobilePop(!mobilePop)}
            >
              <label>Other</label> <MdArrowDropDown />
            </span>
          </div>

          <div className="dashboard_buttons" id={mobilePop ? "pop-open" : ""}>
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
                Analytics
                <span class="pop_chart">
                  <AiOutlineBarChart />
                </span>
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
                  views={blogs.views}
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

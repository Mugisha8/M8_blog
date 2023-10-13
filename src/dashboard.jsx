import React from "react";
import Navbar from "./components/navbar";
import Card_blogs from "./components/Card_blogs";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

function Dashboard() {
  const Blogs = [
    {
      photo:
        "https://images.unsplash.com/photo-1696961672016-7d545878292c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1695071319752-371dcee7bb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://plus.unsplash.com/premium_photo-1680806491014-1cade48c8fd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://plus.unsplash.com/premium_photo-1695758787352-90c6ad0cb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1696920861875-35e708b89f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1693924198149-e14ff98ed3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1696789990406-ae38ef0848d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1696841212541-449ca29397cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Throwback to the Good Old Days",
      Description:
        "Throwback to the Good Old Days takes us on a journey down memory lane, where cherished moments from the past come alive. Its a heartwarming reminder of simpler times, when life was filled with innocence, laughter, and the joy of discovery. This nostalgic trip offers a chance to revisit old photographs, reminisce about favorite childhood games, and bask in the warmth of memories that have stood the test of time. ",
    },
  ];

  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>
      <section id="content">
        <div className="dash_container">
          <div class="hero">
            <h2>Welcome to M8 Engine Blog</h2>
            <p>
              Connect with us in this digital era and stick to the fore front
              position globally with m8 engine blog
            </p>
            <Link to="/signin">
              {" "}
              <button className="button_hero">GET STARTED</button>
            </Link>
          </div>

          <div className="blog_grid">
            {Blogs.map((blog, index) => (
              <Card_blogs
                key={index}
                image={blog.photo}
                title={blog.title}
                Description={blog.Description}
              />
            ))}
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

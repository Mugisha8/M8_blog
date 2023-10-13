import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>

      <section id="create">
        <div className="signup_wrapper">
          <div className="wrapper_signup">
            <h2>Engine Blog SIGNUP</h2>
            <form method="POST" class="form_create">
              <input
                type="text"
                className="signup_text"
                placeholder="Username"
              />
              <input type="text" className="signup_text" placeholder="Email" />
              <input
                type="password"
                className="signup_text"
                placeholder="Password"
              />
              <input
                type="password"
                className="signup_text"
                placeholder="Confirm Password"
              />

              <button>Create an account</button>
            </form>
          </div>
          <div className="wrapper_welcome">
            <h2>Join Us </h2>
            <p>
              We are thrilled to have you join our vibrant community on our
              <b> M8 Engine blog platform</b>, and we extend our warmest welcome
              to you. Your presence is a valuable addition to our growing family
              of writers, readers, and enthusiasts who share a passion for
              engaging content and thoughtful discussions. Our community is
              diverse and supportive, and we encourage you to explore, engage,
              and connect with fellow bloggers who share your interests.
            </p>
            <Link to="/signin">
              <button className="create">Login</button>
            </Link>
          </div>
        </div>
      </section>

      <section id="Footer">
        <Footer />
      </section>
    </>
  );
}

export default Signup;

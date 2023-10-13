import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>

      <section id="login">
        <div className="wrapper">
          <div className="wrapper_login">
            <h2>Engine Blog SIGNIN</h2>
            <form method="POST" class="form_login">
              <input type="text" className="login_text" placeholder="Email.." />
              <input
                type="password"
                className="login_text"
                placeholder="Password"
              />

              <Link to="/">
                <span>Forgot Password ?</span>
              </Link>

              <button>SIGN IN</button>
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
            <Link to="/signup">
              <button className="create">Create An Account</button>
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

export default Signin;

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logindata = { email, password };

  const handlelogin = async (dataf) => {
    try {
      const responses = await fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/Klab/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataf),
        }
      );

      if (responses.ok) {
        const data = await responses.json();
        console.log("response", data);
        localStorage.setItem("token", data.token);
        alert("Sign IN successfully");

        setEmail("");
        setPassword("");

        history.push("/dashboard");
      } else {
        console.log("failed to login");
        alert("failed to login");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <section id="navbar">
        <Navbar />
      </section>

      <section id="login">
        <div className="wrapper">
          <div className="wrapper_login">
            <h2>Meight Blog SIGNIN</h2>
            <form method="POST" className="form_login">
              <input
                type="text"
                className="login_text"
                placeholder="Email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="login_text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/">
                <span>Forgot Password ?</span>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlelogin(logindata);
                }}
              >
                SIGN IN
              </button>
            </form>
          </div>
          <div className="wrapper_welcome">
            <h2>
              M<span className="logo">eight</span> Blogs
            </h2>
            <p>
              We are thrilled to have you join our vibrant community on our
              <b> Meight blog platform</b>, and we extend our warmest welcome to
              you. Your presence is a valuable addition to our growing family of
              writers, readers, and enthusiasts who share a passion for engaging
              content and thoughtful discussions. Our community is diverse and
              supportive, and we encourage you to explore, engage, and connect
              with fellow bloggers who share your interests.
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

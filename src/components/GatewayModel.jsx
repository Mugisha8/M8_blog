import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const GatewayModel = ({ closeGatewayModel, onSuccessfulLogin }) => {
  const navigate = useNavigate();
  const [NewaccountActive, setNewaccountActive] = useState(false);
  const [loginFormActive, setloginFormActive] = useState(true);

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logininfo = { email, password };

  // const signupinfo = { firstname, lastname, email, password };

  {
    /*--------------  Signup -------------------------*/
  }

  const handlesignup = async (e) => {
    e.preventDefault();

    const signupinfo = new FormData();
    signupinfo.append("firstname", firstname);
    signupinfo.append("lastname", lastname);
    signupinfo.append("email", email);
    signupinfo.append("password", password);

    const imageInput = document.getElementById("imageInput");
    const profile = imageInput.files[0];
    signupinfo.append("profile", profile);

    try {
      const response = await fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/Klab/user/signup",

        {
          method: "POST", // Ensure it's a POST request
          body: signupinfo,
        }
      );
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        const responseData = await response.json();
        console.log("response", responseData);
        alert("USER registered succesfully");
        setfirstname("");
        setlastname("");
        setEmail("");
        setPassword("");
        setProfile("");
      } else if (response.status === 500) {
        console.log("Email already exists");
        alert("Email Already exists");
        setfirstname("");
        setlastname("");
        setEmail("");
        setPassword("");
        setProfile("");
      } else {
        console.log("Failed to register your INFO");
        alert("Failed to register your INFO");
        setfirstname("");
        setlastname("");
        setEmail("");
        setPassword("");
        // setProfile([]);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  {
    /*--------------LOGIN -------------------------*/
  }

  const handlelogin = async (logindata) => {
    try {
      const responses = await fetch(
        "https://zigirumugabe-pacifique.onrender.com/api/Klab/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(logindata),
        }
      );

      if (responses.ok) {
        const responseData = await responses.json();
        console.log("response", responseData);
        localStorage.setItem("token", responseData.token);
        alert("Logged In successfully");
        console.log(responseData?.users?.role);
        if (responseData?.users?.role === "admin") {
          // window.location = "./Sys_blog";
          navigate("/Sys_blog");
        } else {
          // window.location = "./blogpost";
          navigate("/");
        }
        setEmail("");
        setPassword("");
        onSuccessfulLogin();
        closeGatewayModel(false);
      } else {
        console.log("Failed to login");
        alert("Ooops, failed to login");

        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="Modelbackground">
        <div className="ModelContainer">
          <button className="cancel" onClick={() => closeGatewayModel(false)}>
            X
          </button>
          <h2>
            M<span className="logo">eight</span> Blogs
          </h2>

          {loginFormActive && (
            <form className="form-login-model">
              <input
                type="text"
                placeholder="Email"
                className="model-input-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="model-input-text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="login"
                onClick={(e) => {
                  e.preventDefault();
                  handlelogin(logininfo);
                }}
              >
                SIGN IN
              </button>

              <h3>----------- connect with us -------------</h3>
              <div className="socialnetworks">
                <FaFacebook className="facebook" />
                <FaInstagram className="instagram" />
                <FaTwitter className="instagram" />
              </div>

              <div className="create">
                <h3
                  onClick={() => {
                    setloginFormActive(false);
                    setNewaccountActive(true);
                  }}
                >
                  New to Meight Blogs{" "}
                  <span className="join">Create an Account</span>
                </h3>
              </div>
            </form>
          )}

          {/* ----------------  Create Account----------------------------- */}

          {NewaccountActive && (
            <form className="form-login-model">
              <input
                type="text"
                placeholder="Firstname"
                className="model-input-text"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Lastname"
                className="model-input-text"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="Email"
                className="model-input-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="model-input-text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="file_img"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setProfile(file);
                }}
              />
              <button className="login" onClick={handlesignup}>
                Create An account
              </button>
              <div className="create">
                <h3
                  onClick={() => {
                    setNewaccountActive(false);
                    setloginFormActive(true);
                  }}
                >
                  Already have an account <span className="join">Login</span>
                </h3>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="footer">
        <p> &copy; All right reserved M8 engine blogs || 2023</p>
        <form method="POST">
          <input
            type="text"
            name="newsletter"
            className="input_news"
            placeholder="Type your Email..."
          />
          <button name="news" className="newsletter">
            {" "}
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Footer;

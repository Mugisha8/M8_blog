import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CoverImage from "./components/CoverImage";

function Blogpost() {
  const Blog_cover = [
    {
      photo:
        "https://plus.unsplash.com/premium_photo-1675690280450-a544f470d42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <section id="blog_navbar">
        <Navbar />
      </section>

      <section id="blog_content">
        <div className="coverblog">
          {Blog_cover.map((blogg, index) => (
            <CoverImage key={index} image={blogg.photo} />
          ))}
        </div>
        <div className="blog_desc">
          <h2>"Embracing the Wild: Celebrating the Beauty of Nature"</h2>
          <p>
            "Embracing the Wild: Step into the heart of nature with our blog,
            where the wonders of the great outdoors come to life. Journey with
            us through lush forests, across rolling meadows, and along serene
            riversides. We celebrate the awe-inspiring beauty of the natural
            world, from breathtaking landscapes to the smallest wonders of flora
            and fauna. Join our community of nature enthusiasts, eco-advocates,
            and adventure seekers as we explore the intricate ecosystems,
            conservation efforts, and the profound serenity that nature offers.
            Through vivid storytelling, breathtaking photography, and insightful
            articles, we invite you to reconnect with the Earth, learn about its
            intricate ecosystems, and find inspiration in the untouched marvels
            of our planet. Let's embark on a journey where the rustle of leaves
            and the song of birds remind us of the profound magic that lies just
            beyond our doorstep."
          </p>
        </div>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Blogpost;

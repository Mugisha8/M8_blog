import React from "react";
import { Link } from "react-router-dom";

const Card_blogs = ({ id, title, Description, image, res }) => {
  return (
    <>
      <div className="card_blog">
        <div>
          <img src={image} alt="" className="card_photo" />
        </div>

        <h4>{title}</h4>

        <div className="desc">
          <p>{Description.substring(0, 230)}</p>
        </div>
        <Link to={`/blogpost/${id}`}>
          <button className="readmore">Read More</button>
        </Link>
      </div>
    </>
  );
};

export default Card_blogs;

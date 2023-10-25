import React from "react";
import { Link } from "react-router-dom";
import { LuView } from "react-icons/Lu";

const Card_blogs = ({ id, title, Description, image, views, PostedOn }) => {

  const formattedDate = new Date(PostedOn).toISOString().split('T')[0];

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

        <div className="dash_view">
          <button className="views_display">
            <LuView />
            &nbsp;{views} Views
          </button>
          <button className="date_display">Posted on: {formattedDate}</button>
        </div>

        <Link to={`/blogpost/${id}`}>
          <button className="readmore">Read More</button>
        </Link>
      </div>
    </>
  );
};

export default Card_blogs;

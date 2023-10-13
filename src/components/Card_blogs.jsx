import React from "react";

const Card_blogs = ({ image, title, Description }) => {
  return (
    <div className="card_blog">
      <img src={image} alt="" className="card_photo" />
      <h4>{title}</h4>
      <p>{Description}</p>
    </div>
  );
};

export default Card_blogs;

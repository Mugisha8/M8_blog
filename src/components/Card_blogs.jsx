import React from "react";

const Card_blogs = ({ title, Description, image, edit, trash }) => {
  return (
    <div className="card_blog">
      <img src={image} alt="" className="card_photo" />
      <div className="image_overlay">Read More</div>
      <h4>{title}</h4>
      <p>{Description}</p>  
      <div className="modification">
        <span className="edit">{edit}</span>
        <span className="delete">{trash}</span>
      </div>
    </div>
  );
};

export default Card_blogs;

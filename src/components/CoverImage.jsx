import React from "react";

const CoverImage = ({ image, title }) => {
  return (
    <div class="cover_image">
      <img src={image} alt="" className="imagecover" />
      <h5>{title}</h5>
    </div>
  );
};

export default CoverImage;

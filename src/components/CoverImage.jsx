import React from "react";

const CoverImage = ({ image }) => {
  return (
    <div class="cover_image">
      <img src={image} alt="" className="imagecover" />
    </div>
  );
};

export default CoverImage;

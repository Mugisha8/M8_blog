import React, { useState } from "react";
import axios from "axios";
import { Editmodel } from "./editmodel";

const Admin_card_blog = ({ id, title, Description, image }) => {
  const [editopen, seteditopen] = useState(false);

  function deleteRecord() {
    axios
      .delete(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/DeleteBlog/${id}`
      )
      .then(() => {
        alert("Blog deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("failed to delete data");
      });
  }

  return (
    
    <>
      
    <div className="card_blog">
  
      <div>
        <img src={image} alt="" className="card_photo" />
      </div>

      <h4>{title}</h4>

      <div className="desc">
        <p>{Description.substring(0,230)}</p>
      </div>

      <div className="modification">
        <button class="modification_edit" onClick={() => seteditopen(true)}>
          EDIT
        </button>
        <button class="modification_delete" onClick={deleteRecord}>
          Delete
        </button>
      </div>
      
    </div>
    {editopen && <Editmodel closeeditmodel={seteditopen} />}
    </>
  );
};

export default Admin_card_blog;

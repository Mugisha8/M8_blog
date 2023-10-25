import React, { useState } from "react";
import axios from "axios";
import { Editmodel } from "./editmodel";
import { LuView } from "react-icons/Lu";

const Admin_card_blog = ({ id, title, Description, image, views }) => {
  const [editOpen, setEditOpen] = useState(false);

  const deleteRecord = () => {
    axios
      .delete(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/DeleteBlog/${id}`
      )
      .then(() => {
        alert("Blog deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Failed to delete data");
      });
  };

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

        <div className="modification">
          <button className="views">
            <LuView /> Views: {views}
          </button>
          <button
            className="modification_edit"
            onClick={() => setEditOpen(true)}
          >
            EDIT
          </button>
          <button className="modification_delete" onClick={deleteRecord}>
            Delete
          </button>
        </div>
      </div>
      {editOpen && (
        <Editmodel closeEditModel={() => setEditOpen(false)} blogId={id} />
      )}
    </>
  );
};

export default Admin_card_blog;

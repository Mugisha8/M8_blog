import React from "react";
import axios from "axios";

export const Editmodel = ({ closeeditmodel }) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [editedTitle, setEditedTitle] = useState(title);
  // const [editedContent, setEditedContent] = useState(content);
  // const [editedImage, setEditedImage] = useState(null);

  // function handleImageChange(event) {
  //   const file = event.target.files[0];
  //   setEditedImage(file);
  // }

  // function handleUpdate() {
  //   const formData = new FormData();
  //   formData.append("blogTitle", editedTitle);
  //   formData.append("blogContent", editedContent);

  //   // Check if editedImage is not null before appending it to the formData
  //   if (editedImage) {
  //     formData.append("blog_Image", editedImage);
  //   }

  //   axios
  //     .put(
  //       `https://node-app-plsi.onrender.com/api/klab/blog/update/${id}`,
  //       formData
  //     )
  //     .then(() => {
  //       alert("Data updated successfully");
  //       setIsEditing(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating data: ", error);
  //       alert("Failed to update data");
  //     });
  // }

  return (
    <>
      <div className="edit_blog_background">
        <div className="edit_blog_content">
          <button className="cancel" onClick={() => closeeditmodel(false)}>
            X
          </button>
          <h2>
            M<span className="logo">eight</span> Blogs
          </h2>
          <div className="content">
            <form className="form-edit-model">
              <input
                type="text"
                className="model-edit-text"
                placeholder="Title"
              />

              <textarea
                className="model-edit-area"
              
              ></textarea>

              <input
                type="file"
                className=""
                accept="image/*" // Allow only image files
              />

              <button className="update">Update / Edit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

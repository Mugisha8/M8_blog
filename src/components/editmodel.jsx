import React, { useState, useEffect } from "react";
import axios from "axios";

export const Editmodel = ({ closeEditModel, blogId }) => {
  const [editedBlog, setEditedBlog] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const token = localStorage.getItem("token");

  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    // Fetch the specific blog post data from your API
    axios
      .get(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewBlogById/${blogId}`
      )
      .then((response) => {
        const blogData = response.data.data;
        setEditedBlog(blogData);
        setTitle(blogData.blogTitle);
        setDescription(blogData.blogContent);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [blogId]);

  const handleSaveClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    // Send a PUT request to update the blog data
    axios
      .put(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/updateBlog/${blogId}`,
        formData,
        configuration
      )
      .then((response) => {
        // Handle successful update
        console.log("Blog updated successfully: ", response.data);
        closeEditModel();
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating blog: ", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="edit_blog_background">
      <div className="edit_blog_content">
        <button className="cancel" onClick={() => closeEditModel(false)}>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="model-edit-area"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input
              type="file"
              className=""
              accept="image/*"
              onChange={handleImageChange}
            />

            <button className="model-update" onClick={handleSaveClick}>
              Update / Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

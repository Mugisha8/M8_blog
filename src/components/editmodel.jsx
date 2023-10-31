import React, { useState, useEffect } from "react";
import axios from "axios";

export const Editmodel = ({ closeEditModel, blogId }) => {
  const [blogTitle, setTitle] = useState("");
  const [blogContent, setDescription] = useState("");
  const [blog_Image, setImageFile] = useState(null);
  const [editedBlog, setEditedBlog] = useState(null);

  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to log in first");
    return;
  }

  useEffect(() => {
    axios
      .get(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/ViewBlogById/${blogId}`
      )
      .then((response) => {
        const blogData = response.data.data;
        console.log("Fetched Blog Data:", blogData);
        setEditedBlog(blogData); // Store the existing blog data
        setTitle(blogData.blogTitle);
        setDescription(blogData.blogContent);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [blogId]);

  const handleSaveClick = (e) => {
    e.preventDefault();
    // const data = {
    //   blogTitle: blogTitle,
    //   blogContent: blogContent,
    //   blogImage: blog_Image,
    // };
    const updData = new FormData();
    updData.append("blogTitle", blogTitle);
    updData.append("blogContent", blogContent);
    if (blog_Image) {
      updData.append("blog_Image", blog_Image);
    }

    // Send a PUT request to update the blog data
    axios
      .put(
        `https://zigirumugabe-pacifique.onrender.com/api/klab/blog/updateBlog/${blogId}`,
        updData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle successful update
        alert(response.data.message);
        console.log(response.data.message);
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
              value={blogTitle}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="model-edit-area"
              value={blogContent}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input
              type="file"
              className=""
              accept="image/*"
              onChange={handleImageChange}
            />

            <button
              className="model-update"
              onClick={(e) => handleSaveClick(e)}
            >
              Update / Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

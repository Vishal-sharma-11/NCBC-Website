import React, { useEffect, useState } from "react";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ManageAboutUs = () => {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Fetch About Us data from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/aboutus/getdata")
      .then((response) => {
        setContent(response.data[0].content);
      })
      .catch((error) => {
        console.error("Error fetching About Us data:", error);
      });
  }, []);

  // Handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save changes
  const handleSave = () => {
    axios
      .put("http://localhost:3000/aboutus/postdata", { content })
      .then(() => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating About Us data:", error);
      });
  };

  return (
    <div className="container">
      <div className="about-section">
        <h1 className="underline">Manage About Us</h1>
        {isEditing ? (
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        )}
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className="edit-btn"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default ManageAboutUs;

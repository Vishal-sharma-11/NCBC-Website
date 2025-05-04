import React, { useEffect, useState } from "react";
import axios from "axios";

// Function to decode HTML entities
const decodeHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.documentElement.textContent || doc.body.textContent;
};

const AboutUs = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/aboutus/getdata");
        setHeading(res.data[0].heading);
        // Decode content if it's HTML-encoded
        setContent(res.data[0].content);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <h1 className="about-underline">{heading}</h1>
        <div className="about-content">
          {/* Render decoded HTML */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

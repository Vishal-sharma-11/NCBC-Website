import React, { useEffect, useState } from "react";
import video1 from "../../assets/NCBC vid.mp4";
import video2 from "../../assets/NCBC vid.mp4";
import video3 from "../../assets/NCBC vid.mp4";
import axios from "axios";

const videos = [
  { id: 1, title: "Legal Awareness Seminar", video: video1 },
  { id: 2, title: "Justice and Human Rights", video: video2 },
  { id: 3, title: "Courtroom Ethics Training", video: video3 },
];

const VideoGallery = () => {
  const [video, SetVideo] = useState([]);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/video/");
        
        SetVideo(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="video-gallery-container">
      <h1 className="video-gallery-title">Video Gallery</h1>
      <div className="video-gallery-grid">
        {video.map((video, index) => (
          <div key={video.id} className="video-gallery-card">
            <video
              src={`http://localhost:3000${video.file_path}`}
              className="video-gallery-video"
              onClick={() => setSelectedIndex(index)}
              muted
            />
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedIndex !== null && (
        <div
          className="video-modal-overlay"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={() => setSelectedIndex(null)}>
              ✕
            </button>

            <button className="video-arrow video-left-arrow" onClick={handlePrev}>
              
            </button>

            <video
              src={videos[selectedIndex].video}
              className="video-modal-video"
              controls
              autoPlay
            />

            <button className="video-arrow video-right-arrow" onClick={handleNext}>
              
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
